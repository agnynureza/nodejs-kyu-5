let start = process.hrtime()

function BenchMark(result){
    setTimeout(() => {
        console.log(result)
        let end = process.hrtime(start)
        let time = end[1]/1000000
        console.log(`Execution time (hr): ${time}ms \n`)
    }, 0)
}

module.exports = BenchMark

