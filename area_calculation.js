const calculateRectangleArea = function(length, width) {
  const area = length * width
  if (area > 0) {
    return area
  } else {
    return undefined
  }
}

const calculateTriangleArea = function(base, height) {
  const area =  base * height / 2
  if (area > 0) {
    return area
  } else {
    return undefined
  }
}

const calculateCircleArea = function(radius) {
  const area = Math.PI * radius * radius
  if (radius > 0) {
    return area
  } else {
    return undefined
  }
}