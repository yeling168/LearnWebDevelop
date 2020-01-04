var rules_widgets = {
  condition: "OR",
  rules: [
    {
      id: "date",
      operator: "equal",
      value: "1991/11/17"
    },
    {
      id: "rate",
      operator: "equal",
      value: 22
    },
    {
      id: "category",
      operator: "equal",
      value: "38"
    },
    {
      condition: "AND",
      rules: [
        {
          id: "coord",
          operator: "equal",
          value: "B.3"
        }
      ]
    }
  ]
};

//Fix for Selectize

// $('#builder-widgets').on('afterCreateRuleInput.queryBuilder')

$('#builder').queryBuilder({
    plugins: ['bt-tooltip-errors'],
})