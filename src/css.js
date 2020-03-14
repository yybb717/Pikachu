const string = `
/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*::before,
*::after {
  box-sizing: border-box;
}
/*先画黄黄的皮肤吧*/
.skin {
  background: rgb(254, 228, 51);
  min-height: 100%;
  position: relative;
}
/* 开始画鼻子了 */
.nose {
  border: 8px solid black;
  border-color: black transparent transparent;

  border-bottom: none;
  width: 0px;
  height: 0px;
  position: absolute;
  top: 190px;
  left: 50%;
  margin-left: -8px;
  z-index: 10;
}
.nose > div {
  height: 8px;
  width: 16px;
  position: absolute;
  bottom: 100%;
  margin-bottom: 8px;
  margin-left: -8px;
  border-radius: 13px 13px 0 0;
  background: black;
}
/* 让可爱的鼻子摇起来 */
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(-5deg);
  }
  66% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: 50% 100%;
  animation: wave 300ms infinite linear;
}
/* 画眼睛啦 */
.eye {
  border: 3px solid rgb(10, 10, 10);
  border-radius: 50%;
  width: 54px;
  height: 54px;
  position: absolute;
  top: 150px;
  left: 50%;
  margin-left: -27px;
  background: rgb(46, 46, 46);
}
.eye.left {
  transform: translateX(-130px);
}
.eye.right {
  transform: translateX(130px);
}
.eye::before {
  content: "";
  display: block;
  width: 28px;
  height: 28px;
  border: 3px solid black;
  background: white;
  border-radius: 50%;
  position: relative;
  top: 0px;
  left: 6px;
}
/* 画性感的大嘴巴 */
.mouth {
  width: 200px;
  height: 150px;
  position: absolute;
  top: 216px;
  left: 50%;
  margin-left: -100px;
}
.mouth .up .lip {
  border: 3px solid black;
  width: 90px;
  height: 46px;
  position: relative;
  left: 50%;
  margin-left: -45px;
  border-top: transparent;
  background-color: rgb(254, 228, 51);
  z-index: 3;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 100%;
  border-right: transparent;
  top: -50px;
  transform: rotate(-30deg) translateX(-57px);
}
.mouth .up .lip.right {
  border-radius: 0 0 100% 0;
  border-left: transparent;
  top: -95px;
  transform: rotate(30deg) translateX(55px);
}
.mouth .down {
  width: 160px;
  height: 140px;
  position: absolute;
  left: 50%;
  margin-left: -80px;
  top: 0%;
  overflow: hidden;
}
.mouth .down .yuan1 {
  border: 3px solid rgba(16, 16, 16, 40%);
  width: 160px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  border-radius: 100px/300px;
  background: rgb(153, 5, 19);
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
  width: 160px;
  height: 500px;
  position: absolute;
  left: 50%;
  margin-left: -80px;
  top: 89%;
  border-radius: 300px/300px;
  background: rgb(252, 74, 98);
}
/* 最后画腮红 */
.face {
  border: 3px solid black;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 11;
  left: 50%;
  margin-left: -40px;
  top: 250px;
  background: red;
}
.face.left {
  transform: translateX(-200px);
}
.face.right {
  transform: translateX(200px);
}
@media (max-width: 500px) {
  .face {
    width: 60px;
    height: 60px;
    margin-left: -30px;
  }
  .face.left {
    transform: translateX(-150px);
  }
  .face.right {
    transform: translateX(150px);
  }
}
/* 结束啦！我的皮卡丘好看嘛 */
`;
export default string;
