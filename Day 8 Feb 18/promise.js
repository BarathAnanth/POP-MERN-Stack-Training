//await can be used only inside the async function; to avoid then_catch(i.e. thenc) using await

/*
function promiseEg(value) {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            if(value)
                resolve("The Promise is Resolved.")
            else
                reject("The Promise is Rejected, can't meet the condition.")
        }, 1000);
    })
}

promiseEg(0).then((res)=>{
    console.log(res);
}).catch((res)=>{
    console.log(res)
})
*/

// Location finder
// 1. Promise(LocFound, LocNotFound)
// 2. Chennai, 2000
/*
function loactionFinder(loc, time){
    var location = new Promise((locFound, locNotFound) => {
        setTimeout(()=>{
            if(isLocationFound(loc, time))
                locFound("Chennai");
            else
                locNotFound(loc+" Not Found");
        }, 2000)
    })
    location.then((found) =>{
        console.log(found)
    }).catch((notFound)=>{
        console.log(notFound)
    })
}

isLocationFound = (loc, time) => {
    location = "Chennai"
    t = 1000

    if(loc === location && t<=time){
        return true
    }else{
        return false
    }

}
loactionFinder("Chennai", 900)
*/

//Instagram Console Demo for Post, Like, Comment, Share.

likeCode = async () => {
    return new Promise((likePost, unlikePost) => {
        setTimeout(() => {
            if (Math.random() > 0.7)  
                likePost("Post has Liked")
            else
                unlikePost("Post unliked")
        }, 5000)
    })
}

commentCode = async () => {
    return new Promise((commentPost, dltComment) => {
        setTimeout(() => {
            if (Math.random() > 0.9)  
                commentPost("Comment has Posted")
            else
                dltComment("Comment Deleted")
        }, 5000)
    })
}

shareCode = async () => {
    return new Promise((sharePost, dltSharePost) => {
        setTimeout(() => {
            if (Math.random() > 0.5)
                sharePost("Shared the Post")
            else
                dltSharePost("Unsend the Shared Post")
        }, 5000)
    })
}

async function PostCode() {
    var post = new Promise((createPost, dltPost) => {
        setTimeout(() => {
            if (Math.random() > 0.6)
                createPost("Post Created Successfully")
            else
                dltPost("Post Deleted Successfully")
        }, 2000)
    })

    try {
        const [pos, like, comment, share] = await Promise.all([post, likeCode(), commentCode(), shareCode()])

        console.log(pos)
        console.log(like)
        console.log(comment)
        console.log(share)
    } catch (error) {
        console.error("Error:", error)
    }
}

PostCode()