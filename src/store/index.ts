import useHomeStore from "./home";
import useConfigStore from "./config";

export default function useStore() {
  return {
    home: useHomeStore(),
    config: useConfigStore(),
  };
}
