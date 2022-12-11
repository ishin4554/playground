// 計算一個物體受力後的距離，其中物體會受力兩次，中間會經過一段延遲。
const distanceTraveled = (scenario, time) => {
 let result;
 // F = ma 反之 a = F/m
 let acc = scenario.primaryForce / scenario.mass;
 let primaryTime = Math.min(time, scenario.delay);
 // s = 1/2*a*t^2 取得移動距離
 result = 0.5 * acc * primaryTime * primaryTime;
 // 如果總時間 > 延遲時間，則計算第二段的加速
 let secondaryTime = time - scenario.delay;
 if(secondaryTime > 0) {
   // 初速度 v = at
   let primaryVelocity = acc * scenario.delay;
   // 第二次加速的加速度重新賦值
   acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
   result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
 }
 return result;
}
export default distanceTraveled;
