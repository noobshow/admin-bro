/* eslint-disable no-param-reassign */
export default (resources) => {
  const map = resources.reduce((memo, resource) => {
    if (memo[resource.parent.name]) {
      memo[resource.parent.name].push(resource)
    } else {
      memo[resource.parent.name] = [resource]
    }
    memo[resource.parent.name].icon = resource.parent.icon
    return memo
  }, {})
  return Object.keys(map).map(parentName => ({
    name: parentName,
    icon: map[parentName].icon,
    resources: map[parentName],
  }))
}
