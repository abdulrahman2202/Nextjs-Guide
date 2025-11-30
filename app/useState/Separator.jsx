"use client"

export const Separator = () => {
    let arr1 = [10,20,30]
    let arr2 = [40,50,60]

    let arr3 = [...arr1,...arr2] // separator
    console.log(arr3)
  return (
    <div>
        <p>Separator ...arr1, ...arr2 {arr3}</p>
    </div>
  )
}
