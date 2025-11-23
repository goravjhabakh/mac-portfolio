import useWindowStore from "../store/window"

const WindowsControl = ({ target }: { target: string }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  )
}
export default WindowsControl