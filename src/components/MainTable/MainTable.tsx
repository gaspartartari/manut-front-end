/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { AgGridReact } from "ag-grid-react";
import { ColDef } from 'ag-grid-community';
import { useState } from "react";
import { localeText } from './LocalText.tsx';

// Component to render cell content with color based on status
const StatusCellRenderer = (props: { value: string }) => {
    const { value } = props;
    let className = '';
    switch (value) {
        case 'em dia':
            className = 'text-green-400';
            break;
        case 'atenção':
            className = 'text-amber-400';
            break;
        case 'atrasada':
            className = 'text-red-400';
            break;
        case 'em progresso':
            className = 'text-blue-400';
            break;
        default:
            className = 'text-gray-400';
    }
    return <span className={className}>{value}</span>;
};

export default function MainTable() {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([
        {
            plan_id: 1, plan_name: "Volvo 500KM", fleat: 64950, type: "odometrico", interval: 500, last_maintenance_counter: 500,
            next_maintenance_counter: 1000, current_counter: 600, status: "em dia"
        },
        {
            plan_id: 2, plan_name: "Utilitários 500KM", fleat: 54566, type: "odometrico", interval: 500, last_maintenance_counter: 750,
            next_maintenance_counter: 1250, current_counter: 1300, status: "atenção"
        },
        {
            plan_id: 1, plan_name: "Volvo 500KM", fleat: 76543, type: "odometrico", interval: 500, last_maintenance_counter: 1500,
            next_maintenance_counter: 2000, current_counter: 2300, status: "atrasada"
        },
        {
            plan_id: 3, plan_name: "Volvo Trimestral", fleat: 64950, type: "temporal", interval: 90, last_maintenance_counter: "20/01/2023",
            next_maintenance_counter: "20/04/2023", current_counter: "15/04/2023", status: "em progresso"
        },
        {
            plan_id: 1, plan_name: "Volvo 500KM", fleat: 64950, type: "odometrico", interval: 500, last_maintenance_counter: 500,
            next_maintenance_counter: 1000, current_counter: 600, status: "em dia"
        },
        {
            plan_id: 2, plan_name: "Utilitários 500KM", fleat: 54566, type: "odometrico", interval: 500, last_maintenance_counter: 750,
            next_maintenance_counter: 1250, current_counter: 1300, status: "atenção"
        },
        {
            plan_id: 1, plan_name: "Volvo 500KM", fleat: 76543, type: "odometrico", interval: 500, last_maintenance_counter: 1500,
            next_maintenance_counter: 2000, current_counter: 2300, status: "atrasada"
        },
        {
            plan_id: 3, plan_name: "Volvo Trimestral", fleat: 64950, type: "temporal", interval: 90, last_maintenance_counter: "20/01/2023",
            next_maintenance_counter: "20/04/2023", current_counter: "15/04/2023", status: "em progresso"
        },
        {
            plan_id: 1, plan_name: "Volvo 500KM", fleat: 64950, type: "odometrico", interval: 500, last_maintenance_counter: 500,
            next_maintenance_counter: 1000, current_counter: 600, status: "em dia"
        },
        {
            plan_id: 2, plan_name: "Utilitários 500KM", fleat: 54566, type: "odometrico", interval: 500, last_maintenance_counter: 750,
            next_maintenance_counter: 1250, current_counter: 1300, status: "atenção"
        },
        {
            plan_id: 1, plan_name: "Volvo 500KM", fleat: 76543, type: "odometrico", interval: 500, last_maintenance_counter: 1500,
            next_maintenance_counter: 2000, current_counter: 2300, status: "atrasada"
        },
        {
            plan_id: 3, plan_name: "Volvo Trimestral", fleat: 64950, type: "temporal", interval: 90, last_maintenance_counter: "20/01/2023",
            next_maintenance_counter: "20/04/2023", current_counter: "15/04/2023", status: "em progresso"
        },
        // ... mais dados
    ]);

    const tasks = [
        { id: 100, name: "Troca de óleo", component: "Motor", product: "Óleo MAX 1L", quantity: 2 },
        { id: 101, name: "Troca de filtro", component: "Ar", product: "Filtro de Ar", quantity: 1 },
        { id: 102, name: "Verificação de freios", component: "Freios", product: "Fluido de Freio", quantity: 1 },
    ];

    const locations = [
        { id: 1, name: "Oficina 1" },
        { id: 2, name: "Oficina 2" },
        { id: 3, name: "Oficina 3" },
    ];

    // Cell renderer function to display numbers or strings correctly
    const cellRenderer = (params: { value: any }) => {
        return typeof params.value === 'number' ? params.value.toString() : params.value;
    };

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState<ColDef[]>([
        { field: "plan_id", headerName: "Código Plano", minWidth: 80, filter: true, floatingFilter: true },
        { field: "plan_name", headerName: "Nome Plano", minWidth: 150, filter: true, floatingFilter: true },
        { field: "fleat", headerName: "Frota/Placa", minWidth: 100, filter: true, floatingFilter: true },
        { field: "type", headerName: "Tipo Contador", minWidth: 100 },
        { field: "interval", headerName: "Intervalo", minWidth: 100 },
        { field: "last_maintenance_counter", headerName: "Última Manutenção", minWidth: 150, cellRenderer },
        { field: "next_maintenance_counter", headerName: "Próxima Manutenção", minWidth: 150, cellRenderer },
        { field: "current_counter", headerName: "Contador Atual", minWidth: 150, cellRenderer },
        { field: "status", headerName: "Situação", minWidth: 100, filter: true, cellRenderer: StatusCellRenderer },
    ]);

    // Default Column Definition: Defines default properties for all columns.
    const defaultColDef = {
        flex: 1, // This will distribute the columns equally.
        minWidth: 100,
        resizable: true,
    };

    // Pagination definitions
    const pagination = true;
    const paginationPageSize = 500;
    const paginationPageSizeSelector = [200, 500, 1000];

    // Row selection event 
    const onRowClicked = (e: any) => {
        setSelectedRowData(e.data);
        setShowModal(true);
    };

    // Modal definitions    
    const [showModal, setShowModal] = useState(false);
    const [showLocationModal, setShowLocationModal] = useState(false);
    const [showDiscardConfirmation, setShowDiscardConfirmation] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState<any>(null);
    const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleEmitirOS = () => {
        setShowModal(false);
        setShowLocationModal(true);
    };

    const handleLocationSelect = (locationId: number) => {
        setSelectedLocation(locationId);
    };

    const handleAvancar = () => {
        if (selectedLocation !== null) {
            setShowLocationModal(false);
            setSuccessMessage("OS 101 criada com sucesso!");
        }
    };

    const handleDesconsiderar = () => {
        setShowModal(false);
        setShowDiscardConfirmation(true);
    };

    const handleConfirmDesconsiderar = () => {
        setShowDiscardConfirmation(false);
        setSuccessMessage("Manutenção desconsiderada com sucesso!");
    };

    return (
        <>
            <div
                className="ag-theme-quartz" // applying the Data Grid theme
                style={{ width: "100%" }} // the Data Grid will fill the size of the parent container
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    domLayout="autoHeight"
                    onGridReady={(params) => params.api.sizeColumnsToFit()}
                    localeText={localeText} // Adiciona traduções em português
                    pagination={pagination}
                    paginationPageSize={paginationPageSize}
                    paginationPageSizeSelector={paginationPageSizeSelector}
                    suppressCellFocus={true} // Remove cell selection
                    onRowClicked={onRowClicked}
                />
            </div>
            {showModal && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {selectedRowData?.plan_name} - Detalhes da Manutenção
                                    </h3>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <div className="flex justify-between p-4">
                                        <div>
                                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                <strong>ID do Plano:</strong> {selectedRowData?.plan_id}
                                            </p>
                                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                <strong>Nome do Plano:</strong> {selectedRowData?.plan_name}
                                            </p>
                                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                <strong>Frota:</strong> {selectedRowData?.fleat}
                                            </p>
                                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                <strong>Tipo:</strong> {selectedRowData?.type}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                <strong>Intervalo:</strong> {selectedRowData?.interval}
                                            </p>
                                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                <strong>Última Manutenção:</strong> {selectedRowData?.last_maintenance_counter}
                                            </p>
                                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                <strong>Próxima Manutenção:</strong> {selectedRowData?.next_maintenance_counter}
                                            </p>
                                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                <strong>Contador Atual:</strong> {selectedRowData?.current_counter}
                                            </p>
                                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                <strong>Status:</strong> {selectedRowData?.status}
                                            </p>
                                        </div>
                                    </div>
                                    <table className="min-w-full divide-y divide-gray-200 mt-4">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Componente</th>
                                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produto</th>
                                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {tasks.map((task, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.component}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.product}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.quantity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Fechar
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleEmitirOS}
                                    >
                                        Emitir OS
                                    </button>
                                    <button
                                        className="bg-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleDesconsiderar}
                                    >
                                        Desconsiderar Man
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
            {showLocationModal && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Escolha o Local da Manutenção
                                    </h3>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <ul>
                                        {locations.map((location) => (
                                            <li key={location.id} className="cursor-pointer my-2" onClick={() => handleLocationSelect(location.id)}>
                                                <div className={`p-4 ${selectedLocation === location.id ? "bg-gray-300" : "bg-gray-100"} hover:bg-gray-200 rounded`}>
                                                    {location.name}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowLocationModal(false)}
                                    >
                                        Fechar
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleAvancar}
                                    >
                                        Avançar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
            {showDiscardConfirmation && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold text-red-500">
                                        Atenção: Riscos de Desconsiderar Manutenção
                                    </h3>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <p className="text-red-500 text-lg">
                                        Desconsiderar esta manutenção pode levar a riscos significativos de falha mecânica, aumento de custos de reparo e possíveis problemas de segurança. Tem certeza de que deseja continuar?
                                    </p>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowDiscardConfirmation(false)}
                                    >
                                        Voltar
                                    </button>
                                    <button
                                        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleConfirmDesconsiderar}
                                    >
                                        Desconsiderar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
            {successMessage && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {successMessage}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setSuccessMessage(null)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setSuccessMessage(null)}
                                    >
                                        Fechar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    );
}
