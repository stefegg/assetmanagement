

export function addArrays(...arrays: number[][]): number[] {
    // Check if there are at least two arrays
    if (arrays.length < 2) {
      throw new Error("At least two arrays are required.");
    }
  
    // Get the length of the first array
    const length = arrays[0].length;
  
    // Check if all arrays have the same length
    if (!arrays.every((arr) => arr.length === length)) {
      throw new Error("All input arrays must have the same length.");
    }
  
    // Add the arrays element-wise
    return arrays[0].map((_, index) =>
      arrays.reduce((sum, arr) => sum + arr[index], 0)
    );
  }

  export function multiplyNumberToArray(
    arr: number[],
    multiplier: number
  ): number[] {
    if (arr.length === 0) {
      return [];
    }
  
    return arr.map((num) => num * multiplier);
  }
  
  export function extendAndTransformArray(
    arr: number[],
    targetLength: number
  ): number[] {
    const extendedArr = arr.slice(0, targetLength).map((num, index) => {
      return num * -1;
  
      return num;
    });
  
    // Fill the rest of the array with 0s if it's shorter than the target length
    while (extendedArr.length < targetLength) {
      extendedArr.push(0);
    }
  
    return extendedArr;
  }
  