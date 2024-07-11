import LineChart from "../../../components/LineChart";
import MainTable from "../../../components/MainTable/MainTable";
import MyPieChart from "../../../components/PieChart";

export default function Dashboard() {

    return (
        <main className="p-5  w-full overflow-auto ">
            <h1>Dashboard</h1>
            <div className="flex border-2 rounded-md">
                <MyPieChart />
                <LineChart />
            </div>
            <MainTable />


        </main>
    )
}