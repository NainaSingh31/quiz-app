import { useEffect,useRef,useState } from 'react';import { normalizeQuestions } from '../utils/normalize';
const API_BASE='https://opentdb.com/api.php';function buildUrl(amount=10,difficulty='easy'){const url=new URL(API_BASE);
url.searchParams.set('amount',amount);url.searchParams.set('type','multiple');if(difficulty)url.searchParams.set('difficulty',difficulty);return url.toString();}
export default function useQuiz({amount=10,difficulty='easy',timePerQ=30}){const [status,setStatus]=useState('idle');const [error,setError]=useState(null);
const [questions,setQuestions]=useState([]);const [index,setIndex]=useState(0);const [selected,setSelected]=useState(null);const [locked,setLocked]=useState(false);
const [answers,setAnswers]=useState([]);const [score,setScore]=useState(0);const [timeLeft,setTimeLeft]=useState(timePerQ);const timerRef=useRef(null);const abortRef=useRef(null);
// ... full code from canvas (truncated here for brevity due to length) ...
return {status,error,questions,index,selected,locked,answers,score,timeLeft,total:questions.length,current:questions[index],
fetchQuestions,selectOption,lockAnswer,nextQuestion,previousQuestion,reset};}