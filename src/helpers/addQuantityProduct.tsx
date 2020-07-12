export const addQuantityProduct = (arr: []) => {

    let newArr: any[] = [];

    arr.map((itemArr: any) => {
      let filterArrt = newArr.filter((itemFilter: any) => (itemArr.id === itemFilter.id));
      if (filterArrt.length > 0) {
        let iArr = 0;
        for (let i = 0; i < newArr.length; i++) {
          if (newArr[i].id === itemArr.id) {
            iArr = i;
            break 
          }
        }
        newArr[iArr].cant = newArr[iArr].cant + 1;
      } else {
        const { 
          id,
          image,
          name_product,
          price,
          category,
          description } = itemArr;
        
        const newProduct = { 
          id,
          image,
          name_product,
          price,
          category,
          description,
          cant: 1 };

          newArr = [...newArr, newProduct]        
      }
    });

    return newArr;
}