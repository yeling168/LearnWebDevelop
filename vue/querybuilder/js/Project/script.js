//debugger;
var $builder,
    $inspectionTemplateCommonFields,
    _templateSegmentToFilterMap = {
      'Text Input': {
        htmlTemplateId: 'lb-text-input-template-segment',
        operators: ['any', 'none', 'includes', 'excludes'],
        valueGetter: function (rule) {
          checkInspectionSegmentSettings(rule);
          
          if (rule.operator.type == "any" || rule.operator.type == "none")
            return rule.operator.type == 'any';
            
          return rule.$el.find('.rule-value-container .' + rule.operator.type + ' input').val();
        },
        valueSetter: function (rule, value) {
          setInspectionSegmentSettings(rule);
          
          if (typeof value != 'boolean') 
            rule.$el.find('.rule-value-container .' + rule.operator.type + ' input')[0].value = value;
        },
        validation: {
          allow_empty_value: true
        }
      },
      'Numeric Input': {
        htmlTemplateId: 'lb-numeric-template-segment',
        operators: ['any', 'none', 'is', 'is-not'],
        valueGetter: function(rule) {
          checkInspectionSegmentSettings(rule);
          
          if (rule.operator.type == "any" || rule.operator.type == "none")
            return rule.operator.type == 'any';
            
          var values = [], 
              checked = rule.$el.find('.rule-value-container .' + rule.operator.type + ' input:checked');
          
          checked.each(function (index, element) {
            var inputValues = [];
            
            $(this).closest('label')
                   .find('input')
                   .each(function (index, element) {
                     inputValues.push(this.value);
                   });
                   
            values.push(inputValues);
          });
          
          return values;
        },
        valueSetter: function(rule, value) {
          setInspectionSegmentSettings(rule);
          
          for (var i = 0; i < value.length; i++) {
      			rule.$el.find('.rule-value-container .' + rule.operator.type + ' input[value="' + value[i][0] + '"]')
      			        .prop('checked', 'true')
      				      .siblings('input')[0].value = value[i][1];
    		  }
        },
        validation: {
          allow_empty_value: true,
          callback: function (value, rule) {
            var moreThan, lessThan;
            
      			for (var i = 0; i < value.length; i++) {
      			  switch (value[i][0]) {
        				case "More Than":
        				  value[i][1] = parseInt(value[i][1], 10);
        				  moreThan = value[i][1];
        				  break;
        				case "Less Than":
        				  value[i][1] = parseInt(value[i][1], 10);
        				  lessThan = value[i][1];
        				  break;
        				case "Exactly":
        				  value[i][1] = parseInt(value[i][1], 10);
        				  break;
      			  }
      			}	
              
      			if (!isNaN(moreThan) && !isNaN(lessThan) && ((rule.operator.type == 'have' && moreThan > lessThan) || (rule.operator.type == 'dont-have' && lessThan > moreThan)))
      				return "More Than and Less Than must create a valid range";
      
      			return true;
          }
        }
      },
      'Checkbox': {
        htmlTemplateId: 'lb-checkbox-template-segment',
        operators: ['can-be'],
        valueGetter: function(rule) {
          checkInspectionSegmentSettings(rule);
          
          var values = [];
          
          rule.$el.find('.rule-value-container .' + rule.operator.type + ' input:checked').each(function () {
            values.push(this.value);
          });
          
          return values;
        },
        valueSetter: function(rule, value) {
          setInspectionSegmentSettings(rule);
          
          for (var i = 0; i < value.length; i++) {
            rule.$el.find("input[value='" + value[i] + "']").prop('checked', true);
          }
        },
        validation: {
          allow_empty_value: true
        }
      },
      'Date/Time': {
        'Date And Time': {
          htmlTemplateId: 'note-date-time',
          operators: ['specific-date', 'date-range', 'time-range']
        },
        'Date Only': {
          htmlTemplateId: 'note-date-time',
          operators: ['specific-date', 'date-range']
        },
        'Time Only': {
          htmlTemplateId: 'lb-dt-time-only-template-segment',
          operators: ['time-range'],
          input_event: 'dp.change',
          valueGetter: function(rule) {
            checkInspectionSegmentSettings(rule);
            
            var values = [];
            
            rule.$el.find('.rule-value-container .' + rule.operator.type + ' input').each(function () {
              console.log(this);
              values.push(this.value);
              console.log(this.value);
            });
            
            console.log(values);
            
            return values;
          },
          valueSetter: function(rule, value) {
            setInspectionSegmentSettings(rule);
            
            var inputs = rule.$el.find('.rule-value-container .' + rule.operator.type + ' input');
            inputs[0].value = value[0];
            inputs[1].value = value[1];
          },
          validation: {
            allow_empty_value: true,
            callback: function (value, rule) {
              var start = moment(value[0], "HH:mm"),
                  end = moment(value[1], "HH:mm");
              
              if (end.isBefore(start)) {
                var x = value[0];
                value[0] = value[1];
                value[1] = x;
              }
              
              return true;
            }
          }
        }
      },
      'Text Choice': {
        htmlTemplateId: 'lb-text-choice-template-segment',
        operators: ['any', 'none', 'include-all-of', 'include-any-of', 'missing-all-of', 'missing-any-of'],
        valueGetter: function(rule) {
          checkInspectionSegmentSettings(rule);
          
          if (rule.operator.type == "any" || rule.operator.type == "none")
            return rule.operator.type == 'any';
            
          var values = rule.$el.find('.rule-value-container .' + rule.operator.type + ' > input').val();
          
          if (values) {
            values = values.split(',').map(function (element) {
              return "/api/choiceListItems/" + element;
            });
          }
          
          return values;
        },
        valueSetter: function(rule, value) {
          setInspectionSegmentSettings(rule);
          
          if (value.length > 0) {
      			value = value.map(function (element) {
      			  return element.split("/").pop();
      			});
              
      			rule.$el.find('.rule-value-container .' + rule.operator.type + ' > input')[0].selectize.setValue(value);
  		    }
		    },
  		  validation: {
  		    allow_empty_value: true
		    }
      },
      'Tag Choice': {
        htmlTemplateId: 'tags',
        operators: ['any', 'none', 'include-all-of', 'include-any-of', 'missing-all-of', 'missing-any-of']
      },
      'Signoff': { 
        'Signoff By': {
          htmlTemplateId: 'lb-signoff-by-template-segment',
          operators: ['signed-off', 'not-signed-off', 'includes-any-of', 'excludes-all-of']
        },
        'Signoff At': {
          htmlTemplateId: 'note-date-time',
          operators: ['specific-date', 'date-range', 'time-range']
        }
      },
      'File Attachment': {
        htmlTemplateId: 'attachments',
        operators: ['any', 'none', 'have', 'dont-have']
      },
      'User Chooser': {
        htmlTemplateId: 'users',
        operators: ['any', 'none', 'includes-any-of', 'excludes-all-of']
      }
    };

$(function() {
  var $reportTemplate = $('#report-template'),
      $fieldsInUseWarning = $('#fields-in-use-warning');
      $inspectionTemplateCommonFields = $('#inspection-template-common-fields');
      
  $builder = $('#builder')
  .on('afterInit.queryBuilder', function(e) { 
    // Prevent AND/OR conditions from being disabled when group contains only one rule
    this.queryBuilder.__proto__.refreshGroupsConditions = function() {};
  })
  .on('afterCreateRuleInput.queryBuilder', function(e, rule) {
    initializePlugins(e, rule);
		
		if (rule.filter.data.htmlTemplateId == 'attachments' || rule.filter.data.logBookTemplateSegmentType == 'Numeric Input') {
		  
  		rule.$el.find('.' + rule.filter.data.htmlTemplateId + ' input:checkbox[name]').change(function() {
        var $namedCheckboxes = $(this).closest('div').find('input:checkbox[name]'),
            $samename = $namedCheckboxes.filter('[name=' + this.name + ']'),
            $otherName = $namedCheckboxes.not($samename);
        
        if (this.checked) {
          $samename.parent().removeClass('disable-text');
          $otherName.prop('checked', false).parent().addClass('disable-text');
        }
        else if (!$samename.is(':checked'))
          $otherName.parent().removeClass('disable-text');
      });
		}
  })
  .queryBuilder({
    operators: [
      'specific-date', 'date-range', 'time-range', 
      'any', 'none', 
      'includes', 'include-all-of', 'include-any-of', 'includes-any-of', 
      'excludes', 'excludes-all-of', 'missing-all-of', 'missing-any-of', 
      'yes', 'no', 
      'have', 'dont-have', 
      'must', 'must-not',
      'has', 'has-not',
      'is', 'is-not',
      'does', 'does-not',
      'can-be',
      'signed-off', 'not-signed-off'
    ].map(function(operator) {
        return {
          type: operator,
          nb_inputs: 1,
          apply_to: null,
          multiple: true
        };
    }),
    lang: {
      add_rule: "Field",
      add_group: "AND / OR",
      operators: {
        any: 'Any',
        none: 'None',
        includes: 'Includes',
        'include-all-of': 'Include All Of',
        'include-any-of': 'Include Any Of',
        'includes-any-of': 'Includes Any Of',
        excludes: 'Excludes',
        'excludes-all-of': 'Excludes All Of',
        'missing-all-of': 'Missing All Of',
        'missing-any-of': 'Missing Any Of',
        'specific-date': 'Of a Specific Date',
        'date-range': 'Within a Date Range',
        'time-range': 'Within a Time Range',
        have: 'Have',
        'dont-have': 'Don\'t Have',
        must: 'Must',
        'must-not': 'Must Not',
        yes: 'Yes',
        no: 'No',
        has: 'Has',
        'has-not': 'Has Not',
        'is': 'Is',
        'is-not': 'Is Not',
        'does': 'Does',
        'does-not': 'Does Not',
        'can-be': 'Can Be',
        'signed-off': 'Signed Off',
        'not-signed-off': 'Not Signed Off'
      }
    },
    plugins: [
      'sortable'
    ],
    templates: {
      operatorSelect: '\
        {{ var optgroup = null; }} \
        <select class="form-control" name="{{= it.rule.id }}_operator"> \
          {{~ it.operators: operator }} \
            {{? optgroup !== operator.optgroup }} \
              {{? optgroup !== null }}</optgroup>{{?}} \
              {{? (optgroup = operator.optgroup) !== null }} \
                <optgroup label="{{= it.translate(it.settings.optgroups[optgroup]) }}"> \
              {{?}} \
            {{?}} \
            <option value="{{= operator.type }}" {{? operator.icon}}data-icon="{{= operator.icon}}"{{?}}>{{= it.translate("operators", operator.type) }}</option> \
          {{~}} \
          {{? optgroup !== null }}</optgroup>{{?}} \
        </select>',
        
      rule: '\
        <div id="{{= it.rule_id }}" class="rule-container"> \
          <div class="rule-header"> \
            <div class="btn-group pull-right rule-actions"> \
              <button type="button" class="btn btn-sm btn-danger" data-delete="rule"> \
                <i class="{{= it.icons.remove_rule }}"></i> \
              </button> \
            </div> \
          </div> \
          {{? it.settings.display_errors }} \
            <div class="error-container"><i class="{{= it.icons.error }}"></i></div> \
          {{?}} \
          <div class="filter-operator-wrapper"> \
            <div class="rule-filter-container"></div> \
            <div class="rule-operator-container"></div> \
            <label> \
              <input type="checkbox" value="Allow Configuring On Query" /> Allow configuring on Query? \
            </label> \
          </div> \
          <div class="rule-value-container"></div> \
        </div>',
        
      group: '\
        <div id="{{= it.group_id }}" class="rules-group-container"> \
          <div class="rules-group-header"> \
            <div class="btn-group pull-right group-actions"> \
              <button type="button" class="btn btn-sm btn-success" data-add="rule"> \
                <strong><i class="{{= it.icons.add_rule }}"></i> {{= it.translate("add_rule") }}</strong> \
              </button> \
              {{? it.settings.allow_groups===-1 || it.settings.allow_groups>=it.level }} \
                <button type="button" class="btn btn-sm btn-success" data-add="group"> \
                  <strong><i class="{{= it.icons.add_group }}"></i> {{= it.translate("add_group") }}</strong> \
                </button> \
              {{?}} \
              {{? it.level>1 }} \
                <button type="button" class="btn btn-sm btn-danger" data-delete="group"> \
                  <i class="{{= it.icons.remove_group }}"></i> \
                </button> \
              {{?}} \
            </div> \
            <div class="btn-group group-conditions"> \
              {{~ it.conditions: condition }} \
                <label class="btn btn-sm btn-default"> \
                  <input type="radio" name="{{= it.group_id }}_cond" value="{{= condition }}"> {{= it.translate("conditions", condition) }} \
                </label> \
              {{~}} \
            </div> \
            {{? it.settings.display_errors }} \
              <div class="error-container"><i class="{{= it.icons.error }}"></i></div> \
            {{?}} \
          </div> \
          <div class=rules-group-body> \
            <div class=rules-list></div> \
          </div> \
        </div>'
    },
    default_filter: 'note-date-time',
    filters: [
      {
        id: 'note-date-time',
        label: 'Note Date/Time',
        optgroup: 'Default Fields',
        data: { htmlTemplateId: 'note-date-time' },
        input: getRuleValueContainer,
        input_event: 'dp.change',
        operators: ['specific-date', 'date-range', 'time-range'],
        valueGetter: function(rule) {
          var values = [];
          
          rule.$el.find('.rule-value-container input:checked')
                    .closest('div')
                    .find(':input')
                    .each(function () {
                      values.push(this.value);
                    });
          
          return values;
        },
        valueSetter: function(rule, value) {
          if (value[0])
    		    rule.$el.find('.rule-value-container input[value="' + value[0] + '"]').prop('checked', 'true');
          
    		  if (value.length > 1) {
            var index = 0;
            
            rule.$el
              .find('.rule-value-container input:checked')
              .closest('div')
              .find(':input, select')
              .each(function() {
              if (index > 0) {
                  this.value = value[index];
                }
                index++;
              });
          }
        },
        validation: {
          allow_empty_value: true,
          callback: validateDateTime
        }
      },
      {
        id: 'update-date-time',
        label: 'Update Date/Time',
        optgroup: 'Default Fields',
        data: { htmlTemplateId: 'note-date-time' },
        input: getRuleValueContainer,
        input_event: 'dp.change',
        operators: ['specific-date', 'date-range', 'time-range'],
        default_operator: 'date-range',
        valueGetter: function(rule) {
          var values = [];
          
          rule.$el.find('.rule-value-container input:checked')
                    .closest('div')
                    .find(':input')
                    .each(function () {
                      values.push(this.value);
                    });
          
          return values;
        },
        valueSetter: function(rule, value) {
          if (value[0])
    			  rule.$el.find('.rule-value-container input[value="' + value[0] + '"]').prop('checked', 'true');
          
    		  if (value.length > 1) {
      			var index = 0;
      			
      			rule.$el
        			.find('.rule-value-container input:checked')
        			.closest('div')
        			.find(':input, select')
        			.each(function() {
        			  if (index > 0) {
                  this.value = value[index];
        			  }
        			  index++;
        			});
    		  }  
        },
        validation: {
          allow_empty_value: true,
          callback: validateDateTime
        }
      },
      {
        id: 'tags',
        label: 'Tags',
        optgroup: 'Default Fields',
        data: { htmlTemplateId: 'tags' },
        input: getRuleValueContainer,
        operators: ['any', 'none', 'include-all-of', 'include-any-of', 'missing-all-of', 'missing-any-of'],
        valueGetter: function(rule) {
          if (rule.operator.type == "any" || rule.operator.type == "none")
            return rule.operator.type == 'any';
            
          var values = rule.$el.find('.rule-value-container .' + rule.operator.type + ' > input').val();
          
          if (values) {
            values = values.split(',').map(function (element) {
              return "/api/tagValues/" + element;
            });
          }
          
          return values;
        },
        valueSetter: function(rule, value) {
          if (value.length > 0) {
      			value = value.map(function (element) {
      			  return element.split("/").pop();
      			});
              
      			rule.$el.find('.rule-value-container .' + rule.operator.type + ' > input')[0].selectize.setValue(value);
    		  }
        },
        validation: {
          allow_empty_value: true
        }
      },
      {
        id: 'note-contents',
        label: 'Note Contents',
        optgroup: 'Default Fields',
        data: { htmlTemplateId: 'note-contents' },
        input: getRuleValueContainer,
        operators: ['includes', 'excludes'],
        valueGetter: function(rule) {
          var text = rule.$el.find('.rule-value-container .' + rule.operator.type + ' input').val(),
              settings = rule.$el.find('.rule-value-container .' + rule.operator.type + ' > label > input');
              
          var settingsJSON = {
            'case-sensitive': settings[0].checked,
            'whole-word': settings[1].checked,
            'wildcards': settings[2].checked
          };
          
          return [text, settingsJSON];
        },
        valueSetter: function(rule, value) {
    		  rule.$el.find('.rule-value-container .' + rule.operator.type + ' input')[0].value = value[0];
          
    		  if (value[1]['case-sensitive'])
    			  rule.$el.find('.rule-value-container .' + rule.operator.type + ' > label > input')[0].checked = true;
            
    		  if (value[1]['whole-word'])
    			  rule.$el.find('.rule-value-container .' + rule.operator.type + ' > label > input')[1].checked = true;
            
    		  if (value[1]['wildcards'])
    			  rule.$el.find('.rule-value-container .' + rule.operator.type + ' > label > input')[2].checked = true;
        },
        validation: {
          allow_empty_value: true,
        },
        default_operator: 'includes'
      },
      {
        id: 'created-by',
        label: 'Created By',
        optgroup: 'Default Fields',
        data: { htmlTemplateId: 'users' },
        input: getRuleValueContainer,
        operators: ['includes-any-of', 'excludes-all-of'],
        valueGetter: function(rule) {
          var values = rule.$el.find('.rule-value-container .' + rule.operator.type + ' > input').val();
          
          if (values) {
            values = values.split(',').map(function (element) {
              return "/api/logBookUsers/" + element;
            });
          }
          
          return values;
        },
        valueSetter: function(rule, value) {
          value = value.map(function (element) {
    			  return element.split("/").pop();
    		  });
            
    		  rule.$el.find('.rule-value-container .' + rule.operator.type + ' > input')[0].selectize.setValue(value);
        },
        validation: {
          allow_empty_value: true
        },
        default_operator: 'includes-any-of'
      },
      {
        id: 'updated-by',
        label: 'Updated By',
        optgroup: 'Default Fields',
        data: { htmlTemplateId: 'users' },
        input: getRuleValueContainer,
        operators: ['includes-any-of', 'excludes-all-of'],
        valueGetter: function(rule) {
          var values = rule.$el.find('.rule-value-container .' + rule.operator.type + ' > input').val();
          
          if (values) {
            values = values.split(',').map(function (element) {
              return "/api/logBookUsers/" + element;
            });
          }
          
          return values;
        },
        valueSetter: function(rule, value) {
          value = value.map(function (element) {
    			  return element.split("/").pop();
    		  });
            
          rule.$el.find('.rule-value-container .' + rule.operator.type + ' > input')[0].selectize.setValue(value);
        },
        validation: {
          allow_empty_value: true
        },
        default_operator: 'includes-any-of'
      },
      {
        id: 'turnover',
        label: 'Turnover',
        optgroup: 'Default Fields',
        data: { htmlTemplateId: 'turnover' },
        input: getRuleValueContainer,
        operators: ['yes', 'no'],
        valueGetter: function(rule) {
          return rule.operator.type == 'yes';
        },
        validation: {
          allow_empty_value: true
        },
        default_operator: 'yes'
      },
      {
        id: 'attachments',
        label: 'Attachments',
        optgroup: 'Default Fields',
        data: { htmlTemplateId: 'attachments' },
        input: getRuleValueContainer,
        operators: ['any', 'none', 'have', 'dont-have'],
        valueGetter: function(rule) {
          if (rule.operator.type == 'any' || rule.operator.type == 'none')
            return rule.operator.type == 'any';
            
          var checked = rule.$el.find('.rule-value-container .' + rule.operator.type + ' input:checked'),
              values = [];
            
          checked.each(function (index, element) {
            var inputValues = [];
            
            $(this).closest('label')
                   .find('input')
                   .each(function (index, element) {
                     inputValues.push(this.value);
                   });
                   
            values.push(inputValues);
          });
          
          return values;
        },
        valueSetter: function(rule, value) {
          for (var i = 0; i < value.length; i++) {
      			rule.$el
      			  .find('.rule-value-container .' + rule.operator.type + ' input[value="' + value[i][0] + '"]')
      			  .prop('checked', 'true')
      				.siblings('input')[0].value = value[i][1];
    		  }
        },
        validation: {
          allow_empty_value: true,
          callback: function (value, rule) {
      			var moreThan, lessThan;
                  
      			for (var i = 0; i < value.length; i++) {
      			  switch (value[i][0]) {
        				case "More Than":
        				  value[i][1] = parseInt(value[i][1], 10);
        				  moreThan = value[i][1];
        				  break;
        				case "Less Than":
        				  value[i][1] = parseInt(value[i][1], 10);
        				  lessThan = value[i][1];
        				  break;
        				case "Exactly":
        				  value[i][1] = parseInt(value[i][1], 10);
        				  break;
      			  }
      			}	
              
      			if (!isNaN(moreThan) && !isNaN(lessThan) && ((rule.operator.type == 'have' && moreThan > lessThan) || (rule.operator.type == 'dont-have' && lessThan > moreThan)))
      				return "More Than and Less Than must create a valid range";
      
      			return true;
    		  }
        },
        default_operator: 'any'
      },
      {
        id: 'comments',
        label: 'Comments',
        optgroup: 'Default Fields',
        data: { htmlTemplateId: 'comments' },
        input: getRuleValueContainer,
        input_event: 'dp.change',
        operators: ['any', 'none', 'must', 'must-not'],
        valueGetter: function(rule) {
          if (rule.operator.type == 'any' || rule.operator.type == 'none')
            return rule.operator.type == 'any';
  
          var checked = rule.$el.find('.rule-value-container .' + rule.operator.type + ' input:checked'),
              values = [];
              
          checked.each(function (index, element) {
            var inputValues = [];
            $(this).closest('div')
                   .find('input')
                   .each(function (index, element) {
                     inputValues.push(this.value);
                   });
                   
            values.push(inputValues);
          });
          
          return values;
        },
        valueSetter: function(rule, value) {
          for (var i = 0; i < value.length; i++) {
      			var inputs = rule.$el
      			  .find('.rule-value-container .' + rule.operator.type + ' input[value="' + value[i][0] + '"]')
      				.closest('div')
      				.find('input');
      								           
      			inputs[0].checked = true;
              
      			switch (value[i][0]) {
      			  case "Text":
        				inputs[1].value = value[i][1];
        				break;
      			  case "From User":
        				value[i][1] = value[i][1].map(function(element) {
        				  return element.split("/").pop();
        				});
        				inputs[1].selectize.setValue(value[i][1]);
      				  break;
      			  case "Between Times":
        				inputs[1].value = value[i][1];
        				inputs[2].value = value[i][2];
        				break;
      			}
    		  }
        },
        validation: {
          allow_empty_values: true,
          callback: function(value, rule) {
            for (var i = 0; i < value.length; i++) {
      			  switch (value[i][0]) {
      				case "From User":
      				  value[i].splice(2, 1);
      				  value[i][1] = value[i][1] ? value[i][1].split(',').map(function(element) {
      					  return "/api/logBookUsers/" + element;
      				  }) : null;
      				  break;
      
      				case "Between Times":
      				  if (Date.parse(value[i][1]) > Date.parse(value[i][2])) {
        					var x = value[i][1];
        					value[i][1] = value[i][2];
        					value[i][2] = x;
      				  }
      				  break;
      			  }
      			}
      
      			return true;
          }
        },
        default_operator: 'any'
      }
    ]
  })
  .on('afterUpdateRuleOperator.queryBuilder', function(e, rule, previousOperator) {
    rule.$el.find('.rule-value-container > div > div:not(.inspection-template-common-field)').each(
      function() {
        $(this).toggleClass('hide', !$(this).hasClass(rule.operator.type) || 
                                    (this.hasAttribute('data-template-segment-only') && rule.filter.optgroup == 'Default Fields'));
      }
    );
  })
  .on('click', '.filter-operator-wrapper input:checkbox', function(e) {
    var rule = $builder.queryBuilder('getModel', $(e.target).closest('.rule-container'));
    
    rule.data.allowConfigureOnQuery = this.checked;
  })
  .on('afterUpdateRuleFilter.queryBuilder', function(e, rule, previousFilter) {
    rule.data = {
      allowConfigureOnQuery: rule.$el.find('.filter-operator-wrapper input:checkbox').prop('checked')
    };
    
    // *** REMOVE AFTER DEV TESTING *******************************************************************************************************************************
    rule.$el.find('.filter-operator-wrapper .segment-type').remove();
    if (rule.filter.optgroup != 'Default Fields') {
      rule.$el.find('.filter-operator-wrapper')
              .append('<div class="segment-type" style="margin-top: 10px; font-weight: bold; background: lightcyan;">Template Segment Type: ' + 
                      rule.filter.data.logBookTemplateSegmentType + '</div>');
    }
    // *** REMOVE AFTER DEV TESTING *******************************************************************************************************************************
  })
  .on('beforeAddRule.queryBuilder', function(e, parent) {
    
  })
  .on('afterAddRule.queryBuilder', function(e, rule) {
    
    
  })
  .on('afterAddGroup.queryBuilder', function(e, group) {
    // Group has no rules at this point, afterAddRule fired after this
    
    if (!group.parent)
      return;
    
    group.condition = group.parent.condition == 'AND' ? 'OR' : 'AND';
  })
  .on('afterUpdateGroupCondition.queryBuilder', function(e, group, previousCondition) {
    group = group ? group.$el : $(this).children();
    
    group.find('.group-conditions > label').each(
      function() {
        $(this).toggleClass('btn-primary', $(this).hasClass('active'))
               .toggleClass('btn-default', !$(this).hasClass('active'));
      }
    );
    
    console.log('afterUpdateGroupCondition');
  })
  .on('click', '.rule-header button', function(e) {
    deleteEmptyGroup();
  })
  .on('afterMove.queryBuilder', function(e, node) {
    deleteEmptyGroup();
  })
  .on('afterUpdateRuleValue.queryBuilder', function(e, rule) {
    
  })
  .on('ruleToJson.queryBuilder.filter', function(e, rule) {
    console.log('ruleToJson');
  })
  .on('jsonToRule.queryBuilder.filter', function(e, json) {
    console.log('jsonToRule');
  })
  .trigger('afterUpdateGroupCondition');
  
  
  $reportTemplate
    .focus(function() {
      $(this).data('previousValue', $(this).val());
    })
    .change(function() {
      if (atLeastOneTemplateFieldInUse()) {
        $fieldsInUseWarning.modal({ backdrop: 'static' })
                           .find('.modal-body span')
                           .html($(this).find('option[value="' + $(this).data('previousValue') +'"]').text());
      }
      else
        refreshTemplateFilters($(this).find(':selected'));
    });
  
  $fieldsInUseWarning.on('hide.bs.modal', function (e) {
    var confirmed = document.activeElement.id == 'confirm';
    
    if (confirmed) {
      refreshTemplateFilters($reportTemplate.find(':selected'));
      deleteEmptyGroup();
    }
    else
      $reportTemplate.val($reportTemplate.data('previousValue'));
  })
  
  $('#save-report').click(function() {
    // TODO: Map QueryBuilder rules' JSON to LogBook JSON and save all rules to LogBook
    // getRules method below calls ruleToJson event for every rule to be saved - rule's JSON can be modified for LogBook there if needed   
    
    var rules = $builder.queryBuilder('getRules');
    
    console.log(rules);
  });
});


function refreshTemplateFilters($selectedTemplate) {
  var templateName = $selectedTemplate.text();
        
  $('#report-templates > *:gt(0)').toggle(templateName != 'None');
  
  var previousTemplateFilters = $builder[0].queryBuilder.filters.slice(9).map(function(filter) { 
    return filter.id; 
  });
  
  $builder.queryBuilder('removeFilter', previousTemplateFilters, true);
      
  // *** For testing purposes, Bridge Check and Rail Car Unloading Checklist cover all possible segments ***
  if (templateName == 'None' || (templateName != 'Bridge Check' && templateName != 'Rail Car Unloading Checklist'))
    return;
    
  var templateSegments = templateName == 'Bridge Check' ? bridgeCheckTemplateSegments : railCarUnloadingTemplateSegments,
      newTemplateFilters = [];
  
  templateSegments.forEach(function(segment) {
    if (segment.obsolete || !_templateSegmentToFilterMap.hasOwnProperty(segment.type.name))
      return;
    
    // Per spec, Signoff template segments result in two distinct filters
    if (segment.type.name == 'Signoff') {
      newTemplateFilters.push(getFilterFromTemplateSegment($selectedTemplate, segment, 'Signoff By'), 
                              getFilterFromTemplateSegment($selectedTemplate, segment, 'Signoff At'));
    }
    else
      newTemplateFilters.push(getFilterFromTemplateSegment($selectedTemplate, segment));
  });
  
  newTemplateFilters.sort(function(a, b) {
    return a.data.sortOrder > b.data.sortOrder ? 1 : -1;
  });
  
  console.log(newTemplateFilters);
  
  $builder.queryBuilder('addFilter', newTemplateFilters, 9);
}

function getFilterFromTemplateSegment($selectedTemplate, segment, segmentSubtype) {
  var segmentType = segment.type.name, 
      filter = _templateSegmentToFilterMap[segmentType];
        
  if (segmentType == 'Date/Time') {
    segmentSubtype = segment.includeDate && segment.includeTime ? 'Date And Time' :
                     segment.includeDate ? 'Date Only' :
                     segment.includeTime ? 'Time Only' : 
                     'Date And Time';
      
    filter = filter[segmentSubtype];
  }
  else if (segmentType == 'Signoff')
    filter = filter[segmentSubtype];
    
  return {
    id: segment.id + (segmentType == 'Signoff' ? '-' + segmentSubtype : ''),
    label: segment.longName + (segmentType == 'Signoff' ? ' (' + segmentSubtype + ')' : ''),
    data: { 
      htmlTemplateId: filter.htmlTemplateId,
      logBookTemplateType: $selectedTemplate.data('logbook-template-type'),
      logBookTemplateSegmentType: segment.type.name + (segmentSubtype ? ' - ' + segmentSubtype : ''),
      sortOrder: segment.sortOrder
    },
    input: getRuleValueContainer,
    input_event: filter.input_event,
    optgroup: $selectedTemplate.text(),
    operators: filter.operators,
    valueGetter: filter.valueGetter,
    valueSetter: filter.valueSetter,
    validation: filter.validation
  };
}


function deleteEmptyGroup(group) {
  group = group || $builder.queryBuilder('getModel');
  
  group.each(true,
    function(rule) {
      
    }, 
    function(group) {
      if (group.rules.length) {
        deleteEmptyGroup(group);
      }
      else {
        $builder.queryBuilder('deleteGroup', group);
      }
    }
  );
}

function atLeastOneTemplateFieldInUse() {
  var templateFieldsInUse = false;
      
  (function recurse(group) {
    group.each(
      function(rule) {
        if (rule.filter.data.logBookTemplateType) {
          templateFieldsInUse = true;
          return false; // stops iteration
        } 
      }, 
      function(group) {
        recurse(group);
        
        if (templateFieldsInUse)
          return false; // stops iteration
      }
    );
  }($builder.queryBuilder('getModel')));
  
  return templateFieldsInUse;
}

function getRuleValueContainer(rule, name) {
 var templateContent = $('#' + rule.filter.data.htmlTemplateId).clone().prop('content'),
     inspectionTemplateCommonFields = 
       rule.filter.data.logBookTemplateType == 'Inspection' ? 
       $inspectionTemplateCommonFields.clone().prop('content') : '';

 return $(templateContent.children)
  .each(function() {
    $(this).toggleClass('hide', !$(this).hasClass(rule.operator.type) || 
                                (this.hasAttribute('data-template-segment-only') && rule.filter.optgroup == 'Default Fields'))
           .find('input:radio')
           .attr('name', rule.id);
  })
  .wrapAll('<div class=' + rule.filter.data.htmlTemplateId + '></div>')
  .parent()
  .append(inspectionTemplateCommonFields)
  .prop('outerHTML');
}

function initializePlugins(e, rule) {
  rule.$el.find('.date-time-picker > div').each(function() {
    $(this).datetimepicker({
      format: this.dataset.format,
      showTodayButton: true,
      showClear: true,
      showClose: true,
      allowInputToggle: true
    });
    
    var todayButtonTooltip = (function(className) {  
      switch(className) {
        case 'has-time':
          return 'Current Date/Time';
        case 'time-only':
          return 'Current Time';
        default:
          return 'Current Date';
      }
    })(this.parentElement.classList.item(1));
    
    $(this).data('DateTimePicker').tooltips({ today: todayButtonTooltip });
  });
    
  rule.$el.find('.tag-picker > :input').selectize({
    valueField: 'id',
    labelField: 'viewString',
    searchField: 'viewString',
    create: false,
    maxItems: 20,
    plugins: ['remove_button'],
    onInitialize: function() {
      var selectize = this;
      
      if (tagValues)
        selectize.addOption(tagValues);
      else {
        // This json file contains the tags for a sample log exactly as they are returned via the logbook API...
        $.getJSON('logTagValues.json', function(data) {
          tagValues = data._embedded.tagValues;
          
          selectize.addOption(tagValues);
        });
      }
    }
	});
	
	rule.$el.find('.user-picker > :input').selectize({
    valueField: 'id',
    labelField: 'name',
    searchField: 'name',
    sortField: 'name',
    create: false,
    maxItems: 7,
    plugins: ['remove_button'],
    onInitialize: function() {
      var selectize = this;
      
      if (logUsers)
        selectize.addOption(logUsers);
      else {
        $.getJSON('logUserValues.json', function(data) {
          logUsers = data._embedded.logUsers.map(function(usr) {
            return {
              id: usr.id,
              name: usr.user.firstName + ' ' + usr.user.lastName
            };
          });
          
          selectize.addOption(logUsers);
        });
      }
    }
	});
	
	rule.$el.find('.text-picker > :input').selectize({
      valueField: 'id',
      labelField: 'value',
      searchField: 'value',
      sortField: 'value',
      create: false,
      maxItems: 7,
      plugins: ['remove_button'],
      onInitialize: function() {
        var selectize = this;

        if (textChoices)
          selectize.addOption(textChoices);
        else {
          $.getJSON('logChoiceListValues.json', function(data) {
            textChoices = data._embedded.choiceListItems;
            selectize.addOption(textChoices);
          });
        }
      }
    });
}

function checkInspectionSegmentSettings(rule) {
  console.log("GETTER");
  if (rule.filter.data.logBookTemplateType == 'Inspection') {
    var comment = rule.$el.find('.rule-value-container .inspection-template-common-field input:checked[value="Includes Segment Comment"]'),
        attachment = rule.$el.find('.rule-value-container .inspection-template-common-field input:checked[value="Includes Segment Attachment"]');
            
    if (comment[0]) {
      rule.filter.data.segmentComment = comment.siblings('select')[0].value == 'Does';
    } else if (rule.filter.data.hasOwnProperty('segmentComment')) {
      delete rule.filter.data['segmentComment'];
    }
            
    if (attachment[0]) {
      rule.filter.data.segmentAttachment = attachment.siblings('select')[0].value == 'Does';
    } else if (rule.filter.data.hasOwnProperty('segmentAttachment')) {
      delete rule.filter.data['segmentAttachment'];
    }
  }
}

function setInspectionSegmentSettings(rule) {
  console.log("SETTER");
  console.log(rule.filter.data);
  
  if (rule.filter.data.hasOwnProperty('segmentComment')) {
    var comment = rule.$el.find('.rule-value-container .inspection-template-common-field input:checked[value="Includes Segment Comment"]');
    comment.prop('checked', true);
    comment.siblings('select')[0].value = rule.filter.data.segmentComment ? 'Does' : 'Does Not';
  }
  
  if (rule.filter.data.hasOwnProperty('segmentAttachment')) {
    var attachment = rule.$el.find('.rule-value-container .inspection-template-common-field input:checked[value="Includes Segment Attachment"]');
    attachment.prop('checked', true);
    attachment.siblings('select')[0].value = rule.filter.data.segmentAttachment ? 'Does' : 'Does Not';
  }
}

function validateDateTime(value, rule) {
  var checkedValue = rule.$el.find('.rule-value-container .' + rule.operator.type + ' input:checked').val();
  if (!checkedValue)
    value.length = 0;
    
  var selection = value[0];
    
  switch (selection) {
    case 'Number of Days Ago':
      value[1] = parseInt(value[1], 10);
      break;
      
    case 'Between Days Ago':
      value[1] = parseInt(value[1], 10);
      value[2] = parseInt(value[2], 10);
        
      if (value[1] < value[2]) {
        var x = value[1];
        value[1] = value[2];
        value[2] = x;
      }
      break;
      
    case 'Between Dates':
    case 'Between Dates/Times':
      if (Date.parse(value[1]) > Date.parse(value[2])) {
        var x = value[1];
        value[1] = value[2];
        value[2] = x;
      }
      break;
  }
  
  return true;
}

function printRules() {
  var rules = $('#builder').queryBuilder('getRules');
  document.getElementById('rules').innerHTML = JSON.stringify(rules, null, 2);
  return rules;
}

var reportFieldCount = 0;
var reportFields = [];

function saveReport() {
  // var logId = $rootScope.selectedLog.id,
  //     reportName = $('#reportName').val() ? $('#reportName').val() : "Temporary Testing Report",
  //     reportId,
  //     reportToPost = {
  //       log: '/api/logs/' + logId,
  //       name: reportName,
  //       outputType: '/api/reportOutputTypes/1'
  //     },
  //     rules = $('#builder').queryBuilder('getRules');

  // if (!rules) return;


  // $http.post('/api/reports', reportToPost).$promise.then(function (response) {
  //   reportId = response.id;
  // });

  reportFieldCount = 0;
  reportFields = [];

  var rules = printRules();
  if (!rules) return;

  var output = processRules(rules, null);
  document.getElementById('rules').innerHTML = JSON.stringify(output, null, 2);
  return output;
}

function processRules(rulesObject, parentId) {
  reportFieldCount++;
  var condition = rulesObject.condition,
    rules = rulesObject.rules;

  var operatorMap = {
        "AND": "/api/logicalOperators/1",
        "OR": "/api/logicalOperators/2"
      };

  var conditionJSON = {
    "id": "/api/reportFields/" + reportFieldCount,
    "operator": operatorMap[condition],
    "parent": parentId ? parentId : null
  };

  reportFields.push(conditionJSON);

  for (var i = 0; i < rules.length; i++) {
    if (rules[i].condition) {
      processRules(rules[i], conditionJSON.id);
    } else {
      reportFieldCount++;
      var ruleJSON = createPayload(rules[i], conditionJSON.id);

      reportFields.push(ruleJSON);
    }
  }

  return reportFields;
}

function createPayload(ruleObject, parentId) {
  var fieldMap = {
        "note-date-time": "/api/noteFields/2",
        "update-date-time": "/api/noteFields/4",
        "tags": "/api/noteFields/10",
        "note-contents": "/api/noteFields/7",
        "created-by": "/api/noteFields/3",
        "updated-by": "/api/noteFields/5",
        "turnover": "/api/noteFields/8",
        "attachments": "/api/noteFields/13",
        "comments": "/api/noteFields/12"
      },
      operatorMap = {
        "AND": "/api/logicalOperators/1",
        "OR": "/api/logicalOperators/2"
      },
      timeMap = {
        "day": "/api/timeUnits/3",
        "week": "/api/timeUnits/4",
        "month": "/api/timeUnits/5",
        "quarter": "/api/timeUnits/6",
        "year": "/api/timeUnits/7"
      };
      
  var payload = {
    "id": "/api/reportFields/" + reportFieldCount,
    "noteField": fieldMap[ruleObject.field],
    "parent": parentId
  };
  
  switch (ruleObject.field) {
    case "note-date-time":
    case "update-date-time":
      switch (ruleObject.value[0]) {
        case "Today":
          payload["timeUnit"] = timeMap["day"];
          payload["numericFrom"] = "0";
          break;
        case "Yesterday":
          payload["timeUnit"] = timeMap["day"];
          payload["numericFrom"] = "-1";
          payload["numericThru"] = "0";
          break;
        case "Number of Days Ago":
          payload["timeUnit"] = timeMap["day"];
          payload["numericFrom"] = (-ruleObject.value[1]).toString();
          payload["numericThru"] = (1 - ruleObject.value[1]).toString();
          break;
        case "Specific Date":
          payload["dtFrom"] = new Date(ruleObject.value[1] + " 00:00:00").toISOString();
          payload["dtThru"] = new Date(ruleObject.value[1] + " 23:59:59").toISOString();
          break;
        case "This Week":
          payload["timeUnit"] = timeMap["week"];
          payload["numericFrom"] = "0";
          break;
        case "Last Week":
          payload["timeUnit"] = timeMap["week"];
          payload["numericFrom"] = "-1";
          payload["numericThru"] = "0";
          break;
        case "This Month":
          payload["timeUnit"] = timeMap["month"];
          payload["numericFrom"] = "0";
          break;
        case "Last Month":
          payload["timeUnit"] = timeMap["month"];
          payload["numericFrom"] = "-1";
          payload["numericThru"] = "0";
          break;
        case "This Quarter":
          payload["timeUnit"] = timeMap["quarter"];
          payload["numericFrom"] = "0";
          break;
        case "Last Quarter":
          payload["timeUnit"] = timeMap["quarter"];
          payload["numericFrom"] = "-1";
          payload["numericThru"] = "0";
          break;
        case "This Year":
          payload["timeUnit"] = timeMap["year"];
          payload["numericFrom"] = "0";
          break;
        case "Last Year":
          payload["timeUnit"] = timeMap["year"];
          payload["numericFrom"] = "-1";
          payload["numericThru"] = "0";
          break;
        case "Between Days Ago":
          payload["timeUnit"] = timeMap["day"];
          payload["numericFrom"] = (-ruleObject.value[1]).toString();
          payload["numericThru"] = (-ruleObject.value[2]).toString();
          break;
        case "Between Dates":
          payload["dtFrom"] = ruleObject.value[1] ? new Date(ruleObject.value[1] + " 00:00:00").toISOString() : null;
          payload["dtThru"] = ruleObject.value[2] ? new Date(ruleObject.value[2] + " 23:59:59").toISOString() : null;
          break;
        case "Between Dates/Times":
          payload["dtFrom"] = ruleObject.value[1] ? new Date(ruleObject.value[1]).toISOString() : null;
          payload["dtThru"] = ruleObject.value[2] ? new Date(ruleObject.value[2]).toISOString() : null;
          break;
      }
      break;
      
    case "tags":
      switch (ruleObject.operator) {
        case "any":
          payload["numericFrom"] = "1";
          break;
        case "none":
          payload["numericThru"] = "0";
          break;
        case "include-all-of":
          payload["tagValues"] = ruleObject.value;
          payload["tagOperator"] = operatorMap["AND"];
          break;
        case "include-any-of":
          payload["tagValues"] = ruleObject.value;
          payload["tagOperator"] = operatorMap["OR"];
          break;
        case "exclude-all-of":
          payload["tagValues"] = ruleObject.value;
          payload["tagOperator"] = operatorMap["AND"];
          payload["negateTags"] = true;
          break;
        case "exclude-any-of":
          payload["tagValues"] = ruleObject.value;
          payload["tagOperator"] = operatorMap["OR"];
          payload["negateTags"] = true;
          break;
      }
      break;
      
    case "note-contents":
      payload["contains"] = ruleObject.value[0];
      if (ruleObject.operator == "excludes") {
        payload["negate"] = true;
      }
      break;
      
    case "created-by":
    case "updated-by":
      switch (ruleObject.operator) {
        case "includes-any-of":
          payload["users"] = ruleObject.value;
          break;
        case "excludes-all-of":
          payload["users"] = ruleObject.value;
          payload["negateUsers"] = true;
          break;
      }
      break;
      
    case "turnover":
      payload["booleanValue"] = ruleObject.value;
      break;
      
    case "attachments":
      switch (ruleObject.operator) {
        case "any":
        case "none":
          payload["hasAttachment"] = ruleObject.value;
          break;
        case "have":
        case "dont-have":
          for (var i = 0; i < ruleObject.value.length; i++) {
            switch (ruleObject.value[i][0]) {
              case "Filename":
                payload["contains"] = ruleObject.value[i][1];
                break;
              case "Extension":
                payload["extension"] = ruleObject.value[i][1];
                break;
              case "More Than":
                payload["numericFrom"] = (ruleObject.value[i][1] + 1).toString();
                break;
              case "Less Than":
                payload["numericThru"] = (ruleObject.value[i][1] - 1).toString();
                break;
              case "Exactly":
                payload["numericFrom"] = (ruleObject.value[i][1]).toString();
                payload["numericThru"] = (ruleObject.value[i][1]).toString();
                break;
            }
          }
          if (ruleObject.operator == "dont-have") payload["negate"] = true;
          break;
      }
      break;
      
    case "comments":
      switch (ruleObject.operator) {
        case "any":
        case "none":
          payload["hasComment"] = ruleObject.value;
          break;
        case "must":
        case "must-not":
          for (var i = 0; i < ruleObject.value.length; i++) {
            switch (ruleObject.value[i][0]) {
              case "Text":
                payload["contains"] = ruleObject.value[i][1];
                break;
              case "From User":
                payload["user"] = ruleObject.value[i][1];
                break;
              case "Between Times":
                payload["dtFrom"] = ruleObject.value[i][1] ? new Date(ruleObject.value[i][1]).toISOString() : null;
                payload["dtThru"] = ruleObject.value[i][2] ? new Date(ruleObject.value[i][2]).toISOString() : null;
                break;
            }
          }
          if (ruleObject.operator == "must-not") payload["negate"] = true;
          break;
      }
      break;
  }
  
  return payload;
}

function saveReportToLocalstorage() {
  var rules = printRules();
  localStorage.setItem('testReport', JSON.stringify(rules));
}

function loadReport() {
  $.getJSON('reportJSONfromLB.json', function(data) {
    var reportFields = data._embedded.reportFields;
    
    for (var i = 0; i < reportFields.length; i++) {
      delete reportFields[i]['_links'];
      for (key in reportFields[i]) {
        if (reportFields[i].hasOwnProperty(key) && reportFields[i][key] === null) {
          delete reportFields[i][key];
        }
      }
    }
    
    reportFields = processFields(reportFields);
    document.getElementById('rules').innerHTML = JSON.stringify(reportFields, null, 2);
    $('#builder').queryBuilder('setRules', reportFields);
  });
}

function processFields (fieldsArray, parentId = null) {
  var rules = {},
      operatorMap = {
        1: 'AND',
        2: 'OR'
      };
      
  var topCondition = fieldsArray.find(function (element) {
    if (!parentId) {
      return !element.parentId;
    } else {
      return element.id == parentId;
    }
  });
  
  rules["condition"] = operatorMap[topCondition.operator.id];
  
  var rulesArray = fieldsArray.filter(function (element) {
    return element.parentId == topCondition.id;
  });
  
  for (var i = 0; i < rulesArray.length; i++) {
    if (rulesArray[i].operator) {
      rulesArray[i] = processFields(fieldsArray, rulesArray[i].id);
    } else {
      rulesArray[i] = createRule(rulesArray[i]);
    }
  }
  
  rules["rules"] = rulesArray;
  
  return rules;
}

function createRule (field) {
  var fieldJSON = {},
      operatorMap = {
        1: 'AND',
        2: 'OR'
      },
      fieldMap = {
        2: 'note-date-time',
        4: 'update-date-time',
        10: 'tags',
        7: 'note-contents',
        3: 'created-by',
        5: 'updated-by',
        8: 'turnover',
        13: 'attachments',
        12: 'comments'
      }, 
      timeMap = {
        3: 'day',
        4: 'week',
        5: 'month',
        6: 'quarter',
        7: 'year'
      };
  
  fieldJSON['id'] = fieldMap[field.noteField.id];
  fieldJSON['field'] = fieldJSON['id'];
  fieldJSON['type'] = 'string';
      
  switch (fieldJSON['id']) {
    case 'update-date-time':
      fieldJSON['data'] = {'templateId': 'note-date-time'};
    case 'note-date-time':
      var timeUnit = field.timeUnit ? timeMap[field.timeUnit.id] : null,
          numericFrom = field.numericFrom,
          numericThru = field.numericThru,
          dtFrom = field.dtFrom ? new Date(field.dtFrom) : null,
          dtThru = field.dtThru ? new Date(field.dtThru) : null;
      
      if (timeUnit === 'day' && numericFrom === 0 && !numericThru) {
        fieldJSON['operator'] = 'specific-date';
        fieldJSON['value'] = ['Today'];
      } else if (timeUnit === 'day' && numericFrom === -1 && numericThru === 0) {
        fieldJSON['operator'] = 'specific-date';
        fieldJSON['value'] = ['Yesterday'];
      } else if (timeUnit === 'day' && numericThru - numericFrom === 1) {
        fieldJSON['operator'] = 'specific-date';
        fieldJSON['value'] = ['Number of Days Ago', -numericFrom];
      } else if (dtThru - dtFrom == ((23 * 60 * 60 + 59 * 60 + 59) * 1000)) {
        fieldJSON['operator'] = 'specific-date';
        var date = (dtFrom.getMonth() + 1) + '/' + dtFrom.getDate() + '/' + dtFrom.getFullYear();
        fieldJSON['value'] = ['Specific Date', date];
      } else if (timeUnit === 'week' && numericFrom === 0 && !numericThru) {
        fieldJSON['operator'] = 'date-range';
        fieldJSON['value'] = ['This Week'];
      } else if (timeUnit === 'week' && numericFrom === -1 && numericThru === 0) {
        fieldJSON['operator'] = 'date-range';
        fieldJSON['value'] = ['Last Week'];
      } else if (timeUnit === 'month' && numericFrom === 0 && !numericThru) {
        fieldJSON['operator'] = 'date-range';
        fieldJSON['value'] = ['This Month'];
      } else if (timeUnit === 'month' && numericFrom === -1 && numericThru === 0) {
        fieldJSON['operator'] = 'date-range';
        fieldJSON['value'] = ['Last Month'];
      } else if (timeUnit === 'quarter' && numericFrom === 0 && !numericThru) {
        fieldJSON['operator'] = 'date-range';
        fieldJSON['value'] = ['This Quarter'];
      } else if (timeUnit === 'quarter' && numericFrom === -1 && numericThru === 0) {
        fieldJSON['operator'] = 'date-range';
        fieldJSON['value'] = ['Last Quarter'];
      } else if (timeUnit === 'year' && numericFrom === 0 && !numericThru) {
        fieldJSON['operator'] = 'date-range';
        fieldJSON['value'] = ['This Year'];
      } else if (timeUnit === 'year' && numericFrom === -1 && numericThru === 0) {
        fieldJSON['operator'] = 'date-range';
        fieldJSON['value'] = ['Last Year'];
      } else {
        fieldJSON['operator'] = 'time-range';
        var fromDate = (dtFrom.getMonth() + 1) + '/' + dtFrom.getDate() + '/' + dtFrom.getFullYear() + ' ' + 
                        dtFrom.getHours() + ':' + dtFrom.getMinutes(),
            thruDate = (dtThru.getMonth() + 1) + '/' + dtThru.getDate() + '/' + dtThru.getFullYear() + ' ' + 
                        dtThru.getHours() + ':' + dtThru.getMinutes();
        fieldJSON['value'] = ['Between Dates/Times', fromDate, thruDate];
      }
      break;
      
    case 'tags':
      fieldJSON['value'] = field.tagValues;
      var tagOperator = operatorMap[field.tagOperator.id];
      if (tagOperator == 'AND' && !field.negateTags) {
        fieldJSON['operator'] = 'include-all-of';
      } else if (tagOperator == 'OR' && !field.negateTags) {
        fieldJSON['operator'] = 'include-any-of';
      } else if (tagOperator == 'AND' && field.negateTags) {
        fieldJSON['operator'] = 'exclude-all-of';
      } else {
        fieldJSON['operator'] = 'exclude-any-of';
      }
      break;
      
     case 'note-contents':
       fieldJSON['operator'] = field.negate ? 'excludes' : 'includes';
       fieldJSON['value'] = [field.contains, {'case-sensitive': false, 'whole-word': false, 'wildcards': false}];
       break;
       
    case 'created-by':
    case 'updated-by':
      fieldJSON['data'] = {'templateId': 'users'};
      fieldJSON['value'] = field.users;
      fieldJSON['operator'] = field.negateUsers ? 'exclude-all-of' : 'include-any-of';
      break;
       
     case 'turnover':
       fieldJSON['operator'] = field.booleanValue ? 'yes' : 'no';
       break;
       
     case 'attachments':
       if (typeof field.hasAttachment == 'boolean') {
         fieldJSON['operator'] = field.hasAttachment ? 'any' : 'none';
       } else {
         fieldJSON['operator'] = field.negate ? 'dont-have' : 'have';
         var values = [];
         if (field.contains) {
           values.push(['Filename', field.contains]);
         }
         if (field.extension) {
           values.push(['Extension', field.extension]);
         }
         if (typeof field.numericFrom == 'number' &&  field.numericFrom === field.numericThru) {
           values.push(['Exactly', field.numericFrom]);
         } else {
           if (typeof field.numericFrom == 'number') {
             values.push(['More Than', field.numericFrom]);
           }
           if (typeof field.numericThru == 'number') {
             values.push(['Less Than', field.numericThru]);
           }
         }
         fieldJSON['value'] = values;
       }
       break;
       
     case 'comments':
       if (typeof field.hasComment == 'boolean') {
         fieldJSON['operator'] = field.hasComment ? 'any' : 'none';
       } else {
         var values = [];
         if (field.contains) {
           values.push(['Text', field.contains]);
         }
         if (field.users) {
           values.push(['From User', field.extension]);
         }
         if (field.dtFrom || field.dtThru) {
           var dtFrom = field.dtFrom ? new Date(field.dtFrom) : '',
               dtThru = field.dtThru ? new Date(field.dtThru) : '';
           if (dtFrom) {
             dtFrom = (dtFrom.getMonth() + 1) + '/' + dtFrom.getDate() + '/' + dtFrom.getFullYear() + ' ' + 
                      dtFrom.getHours() + ':' + dtFrom.getMinutes();
           }
           if (dtThru) {
             dtThru = (dtThru.getMonth() + 1) + '/' + dtThru.getDate() + '/' + dtThru.getFullYear() + ' ' + 
                      dtThru.getHours() + ':' + dtThru.getMinutes();
           }
           values.push(['Between Times', dtFrom, dtThru]);
         }
         fieldJSON['value'] = values;
       }
       break;
  }
  
  return fieldJSON;
}

function loadReportFromLocalstorage() {
  $('#builder').queryBuilder('setRules', JSON.parse(localStorage.getItem('testReport')));
}


//  *** Test data pulled from LogBook API *******************************************************************************************************************
var tagValues, logUsers, logTemplates, bridgeCheckTemplateSegments, railCarUnloadingTemplateSegments, textChoices;

$.getJSON('logTagValues.json', function(data) {
  tagValues = data._embedded.tagValues;
});

$.getJSON('logUserValues.json', function(data) {
  logUsers = data._embedded.logUsers.map(function(usr) {
    return {
      id: usr.id,
      name: usr.user.firstName + ' ' + usr.user.lastName
    };
  });
});

$.getJSON('logTemplates.json', function(data) {
  logTemplates = data._embedded.templates;
  
  var html = '<option>None</option>' + logTemplates
    .map(function(logTemplate) {
      return '<option value="' + logTemplate.id + '" ' + 'data-logbook-template-type="' + logTemplate.templateType.name + '">' + logTemplate.name + '</option>'; 
    })
    .sort(function(a, b) {
      return $(a).text() > $(b).text() ? 1 : -1;
    })
    .join('');
  
  $('#report-templates select:first').html(html);
});

$.getJSON('bridgeCheckTemplateSegments.json', function(data) {
  bridgeCheckTemplateSegments = data._embedded.templateSegments
});

$.getJSON('railCarUnloadingTemplateSegments.json', function(data) {
  railCarUnloadingTemplateSegments = data._embedded.templateSegments
});

$.getJSON('logChoiceListValues.json', function(data) {
  textChoices = data._embedded.choiceListItems;
});
//  *** Test data pulled from LogBook API *******************************************************************************************************************
