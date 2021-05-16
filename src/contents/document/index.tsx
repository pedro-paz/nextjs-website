import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { PageHeader } from "../../components/pageHeader.tsx";
import { StyledTable } from "../../components/table/styles";
import { TopBar } from "../../components/topBar";

const DocumentContent = () => {
  return (
    <div>
      <PageHeader>Documentos</PageHeader>
      <StyledTable>
        <li className="table-header">
          <div>
            <div className="col col-1">Id</div>
            <div className="col col-2">Vendedor</div>
            <div className="col col-3">Valor</div>
            <div className="col col-4">Status</div>
          </div>
        </li>
        <li className="table-row">
          <div>
            <div className="col col-1" data-label="Job Id">
              42235
            </div>
            <div className="col col-2" data-label="Customer Name">
              John Doe
            </div>
            <div className="col col-3" data-label="Amount">
              $350
            </div>
            <div className="col col-4" data-label="Payment Status">
              Pending
            </div>
          </div>
        </li>
        <li className="table-row">
          <div>
            <div className="col col-1" data-label="Job Id">
              42442
            </div>
            <div className="col col-2" data-label="Customer Name">
              Jennifer Smith
            </div>
            <div className="col col-3" data-label="Amount">
              $220
            </div>
            <div className="col col-4" data-label="Payment Status">
              Pending
            </div>
          </div>
        </li>
        <li className="table-row">
          <div>
            <div className="col col-1" data-label="Job Id">
              42257
            </div>
            <div className="col col-2" data-label="Customer Name">
              John Smith
            </div>
            <div className="col col-3" data-label="Amount">
              $341
            </div>
            <div className="col col-4" data-label="Payment Status">
              Pending
            </div>
          </div>
        </li>
        <li className="table-row">
          <div>
            <div className="col col-1" data-label="Job Id">
              42311
            </div>
            <div className="col col-2" data-label="Customer Name">
              John Carpenter
            </div>
            <div className="col col-3" data-label="Amount">
              $115
            </div>
            <div className="col col-4" data-label="Payment Status">
              Pending
            </div>
          </div>
        </li>
      </StyledTable>
    </div>
  );
};

export default DocumentContent;
