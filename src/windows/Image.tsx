import WindowsControl from "../components/WindowsControl"
import WindowWrapper from "./WindowWrapper"
import useWindowStore from "../store/window"

const Image = () => {
  const { windows } = useWindowStore()
  const data = windows['imgfile'].data as { name: string, icon: string } | null

  if (!data) return (
    <>
      <div id="window-header">
        <WindowsControl target="imgfile" />
        <h2>Image</h2>
      </div>
      <div className="flex items-center justify-center p-10 text-white">
        No Image Selected
      </div>
    </>
  )

  return (
    <>
      <div id="window-header">
        <WindowsControl target="imgfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="flex justify-center items-center bg-gray-900/90 backdrop-blur-sm p-4 rounded-b-lg h-full">
        <img 
          src={data.icon} 
          alt={data.name} 
          className="w-auto h-auto max-w-3xl object-contain shadow-2xl"
          style={{ maxHeight: '768px' }}
        />
      </div>
    </>
  )
}

const ImageWindow = WindowWrapper(Image, 'imgfile')
export default ImageWindow