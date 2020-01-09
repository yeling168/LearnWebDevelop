//refer to https://github.com/mistic100/jQuery-QueryBuilder/issues/500
//https://www.devexpress.com/Support/Center/Question/Details/T271981/how-to-provide-jquery-querybuilder-with-data-from-odatastore
//https://embed.plnkr.co/npadZQ/
//https://dabernathy89.github.io/vue-query-builder/
//https://getbootstrap.com/docs/3.3/javascript/#tooltips
//https://jsfiddle.net/pbauzhmw/2/
//https://getbootstrap.com/
//https://stackoverflow.com/questions/52895825/jquery-query-builder-cannot-get-it-to-work-uncaught-typeerror-cannot-set-pr
//http://nathan_backoffice.yirdis.com/public/templates/portal/js/querybuilder/src/plugins/bt-tooltip-errors/
//https://embed.plnkr.co/plunk/OAdBjz
//https://git.canopsis.net/canopsis-ui-bricks/brick-rrule-editor/blob/200f7d30edf5ddb7b4f0c12b73828ad1101073df/externals/jQuery-QueryBuilder/examples/index.html
//https://issue.life/questions/52895825/
var rules_basic = {
    condition: "AND",
    rules: [
      {
        id: "price",
        operator: "less",
        value: 10.25
      },
      {
        condition: "OR",
        rules: [
          {
            id: "category",
            operator: "equal",
            value: 2
          },
          {
            id: "category",
            operator: "equal",
            value: 1
          }
        ]
      }
    ]
  };
  
  $("#builder").queryBuilder({
    plugins: ["bt-tooltip-errors"],
    display_errors:true,
    filters: [
      {
        id: "name",
        label: "Name",
        type: "string",
        validation: {
          callback: function(value, rule) {
            console.log(value);
            console.log(rule);
            if(value < 3) {
              return "不能小于3";
            }
            return true
          }
        }
      },
      {
        id: "category",
        label: "Category",
        type: "integer",
        input: "select",
        values: {
          1: "Books",
          2: "Movies",
          3: "Music",
          4: "Tools",
          5: "Goodies",
          6: "Clothes"
        },
        operators: [
          "equal",
          "not_equal",
          "in",
          "not_in",
          "is_null",
          "is_not_null"
        ]
      },
      {
        id: "in_stock",
        label: "In stock",
        type: "integer",
        input: "radio",
        values: {
          1: "Yes",
          0: "No"
        },
        operators: ["equal"]
      },
      {
        id: "price",
        label: "Price",
        type: "double",
        validation: {
          min: 0,
          step: 0.01
        }
      },
      {
        id: "id",
        label: "Identifier",
        type: "string",
        placeholder: "____-____-____",
        operators: ["equal", "not_equal"],
        validation: {
          format: /^.{4}-.{4}-.{4}$/,
          messages: {
            format: 'The provided IP is not valid'
          }
        }
      }
    ],
    rules: rules_basic
  });
  
  $("#btn-get").on("click", function() {
    var result = $("#builder").queryBuilder("getRules");
    if (!$.isEmptyObject(result)) {
      alert(JSON.stringify(result, null, 2));
    } else {
      console.log("invalid object :");
    }
    console.log(result);
  });
  
  $("#btn-reset").on("click", function() {
    $("#builder").queryBuilder("reset");
  });
  
  $("#btn-set").on("click", function() {
    var result = $("#builder").queryBuilder("getRules");
    if (!$.isEmptyObject(result)) {
      rules_basic = result;
    }
  });
  
  $("#builder").on("getRules.queryBuilder.filter", function(e) {
    console.info(e.value);
  });

  $('#builder').on('validationError.queryBuilder', function(e, node, error, value) {
    if (true) {
      error[0] = 'My error message';
    }
  });
  