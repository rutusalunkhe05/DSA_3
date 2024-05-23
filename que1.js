// //1.Find the Missing Number//
function findMissing(arr, N) {
    let i;
    
    let temp = new Array(N).fill(0);

    for (i = 0; i < N; i++) {
        temp[arr[i] - 1] = 1;
    }

    let ans = 0;
    for (i = 0; i <= N; i++) {
        if (temp[i] === 0)
            ans = i + 1;
    }
    console.log(ans);
}

let arr = [1, 2, 4, 6, 3, 7, 8];
let n = arr.length;

findMissing(arr, n);


