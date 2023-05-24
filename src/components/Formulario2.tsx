import { useForm } from "./hooks/useForm";

export const Formulario2 = () => {
  const { formulario, handleChange } = useForm({
    postal: "abc",
    ciudad: "Ottawa",
  });

  const { postal, ciudad } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="text"
          className="form-control"
          name="postal"
          value={postal}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
