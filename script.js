function f1(callback) {
  setTimeout(() => {
    console.log("f1");
    if (callback) callback();
  }, 1000);
}
function f2(callback) {
  setTimeout(() => {
    console.log("f2");
    if (callback) callback();
  }, 2000);
}
function f3(callback) {
  setTimeout(() => {
    console.log("f3");
    if (callback) callback();
  }, 3000);
}

f1(() => {
  f2(() => {
    f3(() => {
      setInterval(()=>{
        return "ola Mundo!";
      },3500)

    });
  });
});
