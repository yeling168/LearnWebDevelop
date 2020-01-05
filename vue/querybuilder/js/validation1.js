//refer to https://github.com/mistic100/jQuery-QueryBuilder/issues/500
//https://embed.plnkr.co/npadZQ/
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
          format: /^.{4}-.{4}-.{4}$/
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
  