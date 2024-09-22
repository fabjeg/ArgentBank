export const TOGGLE_COLLAPSE = "TOGGLE_COLLAPSE";

export const toggleCollapse = (id) => {
  return {
    type: TOGGLE_COLLAPSE,
    payload: id,
  };
};
