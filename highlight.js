function highlight(){
    let pre = document.getElementsByTagName("pre")
    for(let i in pre){
        if(pre[i].className == "highlight"){
            // console.log(pre[i])
            let e = pre[i]
            let lineary = e.innerHTML.split("\n")
            for(let j in lineary){
                let line = lineary[j]
                console.log(line)
            }
        }
    }
}

highlight()