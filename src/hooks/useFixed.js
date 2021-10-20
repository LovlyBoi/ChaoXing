import { reactive, onMounted, onUnmounted } from 'vue'

export default function (top) {
  let fixedObj = reactive({
    position: "static",
    top: "0",
  });

  function fixedHandler() {
    let t = document.documentElement.scrollTop;
    // console.log(t);
    if (t > top) {
      fixedObj.position = "fixed";
    }
    if (t < top) {
      fixedObj.position = "static";
    }
  }

  onMounted(() => {
    window.addEventListener("scroll", fixedHandler);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", fixedHandler);
  });

  return fixedObj
}


