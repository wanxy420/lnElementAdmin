import { App } from "vue";

function scroll(app: App) {
  app.directive("lnScroll", {
    mounted(el: any, binding: any) {
      const setInter = () => {
        requestAnimationFrame(() => {
          el.scrollTop += 1;
          const firstChild = el.children[0];
          if (el.scrollTop > el.children[0]?.clientHeight) {
            el.removeChild(el.children[0]);
            el.appendChild(firstChild);
          }
        });
      };
      binding?.timeout && clearInterval(binding?.timeout);
      binding.timeout = setInterval(setInter, binding.times);
      el.addEventListener("mouseover", () => {
        binding.timeout && clearInterval(binding.timeout);
      });
      el.addEventListener("mouseout", () => {
        binding.timeout = setInterval(setInter, binding.times);
      });
    },
  });
}

export { scroll };
