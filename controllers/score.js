var scores = [];

const addScore = (score) => new Promise((resolve) => resolve(scores.push(score)));
const deleteScore = () => new Promise((resolve) => resolve(scores.shift()));

function calculateScore(word){
    return word.length;
}

function isPalindrome(str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}

function getScore(req, res) {
    res.status(200).json({
        scores
    });
}

async function postScore(req, res) {
    let word = req.body.word;
    if (!isPalindrome(word)){
      res.status(400).json({
        message: "error palindromo"
      });
    }

    let score = { 
        name: req.body.name, 
        points: calculateScore(word)
    }

    if (scores.length < 5){
        await addScore(score);
    }

    else if (scores.length == 5 && score.points > scores[0].points){
        await deleteScore();
        await addScore(score);
    }
    
    scores.sort(function(a, b){
        return a.points - b.points;
    });

    res.status(200).json({
        scores
    });
}

exports.postScore = postScore;
exports.getScore = getScore;
exports.isPalindrome = isPalindrome;
exports.calculateScore = calculateScore;
