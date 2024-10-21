

export default function Home() {
  return (
    <section className="flex justify-center items-center flex-row h-screen space-x-12">
      <div className="border-2 border-white border-opacity-25 rounded-[30px] w-[70%] h-[80%]">
          <table className="border border-yellow-300 w-[100%]">
            <tr className="border border-red-600 h-[50px]">
              <td className="border border-green-500  "><span className="flex justify-center items-center">title</span></td>
              <td className="border border-green-500  "><span className="flex justify-center items-center">author</span></td>
              <td className="border border-green-500  "><span className="flex justify-center items-center">genre</span></td>
              <td className="border border-green-500  "><span className="flex justify-center items-center">N page</span></td>
              <td className="border border-green-500  "><span className="flex justify-center items-center">language</span></td>
              <td className="border border-green-500  "><span className="flex justify-center items-center">action</span></td>
            </tr>
          </table>
      </div>
    </section>
  );
}