let qun = 40;
let rate = 50;
let net;
if(qun >= 100){
  let discountper = 20;
  let dis = (qun*rate)*(discountper/100);
  net = (qun*rate)-dis;
}else if(qun >=50){
  let discountper = 10;
  let dis = (qun*rate)*(discountper/100);
  net = (qun*rate)-dis;
}else{
  net = qun * rate;
}
