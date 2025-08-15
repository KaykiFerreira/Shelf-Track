export function getStatusColor(status) {
  if (status === "✔") return "green";
  if (status === "⚠") return "yellow";
  if (status === "✖") return "red";
  return "";
}
