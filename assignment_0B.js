

function interviewTcs(gradScore,hscScore,sscScore,candidateName){
var result =( (gradScore>=70) && ( hscScore>=80) && (sscScore>=90)) ? `Congrates ${candidateName} You are eligible for TCS interview.` : `${candidateName} Unfortunately you are not eligible for interview.`;
console.log(result);
}
interviewTcs(80,86,90,"Nitin");
interviewTcs(70,65,55,"Akshay");
interviewTcs(60,79,88,"Onkar");