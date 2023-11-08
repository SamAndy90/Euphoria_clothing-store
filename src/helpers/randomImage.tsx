export type RandomImageData = Array<any>

export const randomImage = (arr: RandomImageData) => {
    const count = Math.floor(Math.random() * arr.length)
    return arr[count]
}