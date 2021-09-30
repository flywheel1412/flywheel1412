const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

---
### My GitHub Contributions    

![](https://raw.githubusercontent.com/flywheel1412/flywheel1412/main/assets/github-contribution-grid-snake.svg)          

### About me      

[![Flywheel1412's GitHub stats](https://github-readme-stats.vercel.app/api?username=flywheel1412&show_icons=true&theme=radical)](https://github.com/anuraghazra/github-readme-stats)
![Flywheel1412's Most used languages](https://github-readme-stats.vercel.app/api/top-langs/?username=flywheel1412&layout=compact&hide_border=true&langs_count=10)


console.log(readme)
