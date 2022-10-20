import { App } from "vue";

function scroll(app: App) {
  app.directive("lnScroll", {
    mounted(el: any, binding: any) {
      const wrapper = document.querySelector(el.className);
      const setInter = () => {
        requestAnimationFrame(() => {
          wrapper.scrollTop += 1;
          const firstChild = wrapper.children[0];
          if (wrapper.scrollTop > wrapper.children[0]?.clientHeight) {
            wrapper.removeChild(wrapper.children[0]);
            wrapper.appendChild(firstChild);
          }
        });
      };
      binding.timer && clearInterval(binding.timer);
      binding.timer = setInterval(setInter, binding.time);
      wrapper.addEventListener("mouseover", () => {
        binding.timer && clearInterval(binding.timer);
      });
      wrapper.addEventListener("mouseout", () => {
        binding.timer = setInterval(setInter, binding.time);
      });
    },
  });
}

export { scroll };
