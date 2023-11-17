export default function NavBar () {
  return(
    <div className="flex flex-row justify-between p-4 text-blue-100 text-xl bg-blue-950">
      <div>Logo</div>
      <div>
        <ul>TailwindCSS</ul>
        </div>
      <div>
        <ul className="flex flex-row gap-2">
          <li className="border rounded-full">noti</li>
          <li className="border rounded-full">pic</li>
        </ul>
      </div>
    </div>
  )
}