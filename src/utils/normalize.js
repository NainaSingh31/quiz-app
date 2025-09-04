export function decodeHtml(str){const txt=document.createElement('textarea');txt.innerHTML=str;return txt.value;}
export function shuffle(array){const a=array.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function normalizeQuestions(apiResults){return apiResults.map((q,idx)=>{const question=decodeHtml(q.question);const correct=decodeHtml(q.correct_answer);
const incorrects=q.incorrect_answers.map(decodeHtml);const options=shuffle([correct,...incorrects]).slice(0,4);const correctIndex=options.indexOf(correct);
return {id:`${idx}-${Date.now()}`,category:q.category,difficulty:q.difficulty,question,options,correctIndex,correctAnswer:correct};});}