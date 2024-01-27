import { toast } from 'react-toastify'

export function formatThousand(num: number, sep?: string) {
    let numb = num < 0 ? num * -1 : num;
    let str = numb.toString().split("").reverse()
    let newArr: string[] = []

    str.forEach((char, i) => {
        if ((i % 3) == 0 && (i != 0)) {
            newArr.push(sep ? sep : ",")
            newArr.push(char)
        } else {
            newArr.push(char)
        }
    })

    let newStr = newArr.reverse().join("")
    return (num < 0 ? "-" : "") + newStr
}

export function showSoonToast() {
    toast.success("Sorry, this feature is coming soon.", {
        className: "toast-message",
        closeOnClick: true
    })
}