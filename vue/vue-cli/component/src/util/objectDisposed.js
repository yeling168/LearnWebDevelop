/**
 * 将最小子项的Id组成一维数组
 * @param {*节点数组} nodesList
 * @param {*用于存放子节点的属性名称，默认为children} children
 * @param {*用于节点唯一标识的属性名称，默认为id} id
 */
export function getMinNodeIdList(nodesList, children, id) {
  !children ? (children = "children") : "";
  !id ? (id = "id") : "";
  let res = [];
  for (let node of nodesList) {
    let resItem = [];
    if (node[children] && node[children].length > 0) {
      // res.push.apply(res,this.getLinearList(node.children));
      resItem = getMinNodeIdList(node[children], children, id);
    } else {
      resItem.push(node[id]);
    }
    res.push.apply(res, resItem);
  }
  return res;
}

/**
 * 获取默认选中
 * @param {* 节点数组} nodesList
 * @param {* 用于存放子节点属性，包括id唯一标识、children子节点标识、checked选中标识} props
 * @param {* 标识子节点标识是否需要判断长度(默认false) - false表示如果无子节点则children为null,true表示如果无子节点children为空数组} isChildLen
 * @param {* 标识是否返回对象列表，默认false, 返回id列表} getNodes
 * @return {* 属性checked为true的子节点id或对象数组}
 */
export function getDefaultChecked(nodesList, props, isChildLen, getNodes) {
  props = props || {
    children: "childern",
    id: "id",
    checked: "checked",
  };
  let defaultCheckedList = [];
  for (let node of nodesList) {
    if (node[props.children]) {
      if (isChildLen) {
        if (node[props.children].length > 0) {
          let temp = getDefaultChecked(node[props.children], props, isChildLen, getNodes);
          if (temp.length > 0) {
            defaultCheckedList.push.apply(defaultCheckedList, temp);
          }
        } else {
          if (node[props.checked || props.selected]) {
            getNodes ? defaultCheckedList.push(node) : defaultCheckedList.push(node[props.id]);
          }
        }
      } else {
        let temp = getDefaultChecked(node[props.children], props, isChildLen, getNodes);
        if (temp.length > 0) {
          defaultCheckedList.push.apply(defaultCheckedList, temp);
        }
      }
    } else {
      if (node[props.checked || props.selected]) {
        getNodes ? defaultCheckedList.push(node) : defaultCheckedList.push(node[props.id]);
      }
    }
  }
  return defaultCheckedList;
}

/**
 * 将节点数组平展为一维数组
 * @param {*节点数组} nodeList
 * @param {*用于存放子节点的属性名称，默认为children} children
 * @param {*用于处理忽略子节点的条件数组} ignoreNode
 */
export function getLinearList(nodesList, children, ignoreNode) {
  !children ? (children = "children") : "";
  let res = [];
  if (!nodesList || nodesList.length === 0) return res;
  for (let node of nodesList) {
    let resItem = {};
    let childrenItem = [];
    if (node[children] && node[children].length > 0) {
      // res.push.apply(res,this.getLinearList(node.children));
      childrenItem = getLinearList(node[children], children, ignoreNode);
    }
    let isIgnore = false;
    if (ignoreNode) {
      ignoreNode.forEach(ignore => {
        isIgnore = isIgnore || node[ignore.param] == ignore.value;
        if (isIgnore) return;
      });
      // if (resule)
      //   continue;
    }
    // console.log(node)
    if (!isIgnore) {
      resItem = node;
      res.push(resItem);
    }
    // console.log("before-push-child",res)
    res.push.apply(res, childrenItem);
    // console.log("after-push-child",res)
  }
  return res;
}
