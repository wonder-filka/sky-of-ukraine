import React, { useState } from "react";
import { t } from "i18next";

export default function RequisCurrensy({ currensy }) {
  const [svgColorUAH, setSvgColorUAH] = useState("black");
  const [svgColorUSD, setSvgColorUSD] = useState("black");
  const [svgColorEUR, setSvgColorEUR] = useState("black");

  function changeSvgColorUAH() {
    setSvgColorUAH("#4c94ff");
  }
  function changeSvgColorUSD() {
    setSvgColorUSD("#4c94ff");
  }
  function changeSvgColorEUR() {
    setSvgColorEUR("#4c94ff");
  }

  function CopyIbanUAH(event) {
    navigator.clipboard.writeText(`UA173052990000026009013609953`);
  }
  function CopyIbanUSD(event) {
    navigator.clipboard.writeText(`UA443052990000026002033606449`);
  }
  function CopyIbanEUR(event) {
    navigator.clipboard.writeText(`UA763052990000026002033608395`);
  }

  if (currensy === "UAH") {
    return (
      <div className="reqColPop">
        <div className="requs-second-title">{t("requisites second title")}</div>
        <div className="requs">
          <div className="requs-title">{t("Recipient's name")} </div>
          <div className="requs-title">БО БФ НЕБО УКРАЇНИ</div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("Recipient's code")} </div>
          <div className="requs-title">44860393</div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("Name of the bank")}</div>
          <div className="requs-title">АТ КБ «ПриватБанк»</div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("IBAN Code")}</div>
          <div className="requs-title iban">
            UA173052990000026009013609953
            <svg
              onClick={() => {
                CopyIbanUAH();
                changeSvgColorUAH();
              }}
              alt="copy iban"
              id="iconCopyUAH"
              fill={svgColorUAH}
              width="15px"
              height="15px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1919.887h1467.88V452.008H0v1467.88ZM1354.965 564.922v1242.051H112.914V564.922h1242.051ZM1920 0v1467.992h-338.741v-113.027h225.827V112.914H565.035V338.74H452.008V0H1920ZM338.741 1016.93h790.397V904.016H338.74v112.914Zm0 451.062h790.397v-113.027H338.74v113.027Zm0-225.588h564.57v-112.913H338.74v112.913Z"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("Currency")}:</div>
          <div className="requs-title">UAH</div>
        </div>
      </div>
    );
  } else if (currensy === "USD") {
    return (
      <div className="reqColPop">
        <div className="requs-second-title">{t("requisites second title")}</div>
        <div className="requs">
          <div className="requs-title">{t("Company details")}</div>
          <div className="requs-title">БФ НЕБО УКРАЇНИ</div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("IBAN Code")}</div>
          <div className="requs-title iban " id="ibanUSD">
            UA443052990000026002033606449
            <svg
              onClick={() => {
                CopyIbanUSD();
                changeSvgColorUSD();
              }}
              alt="copy iban"
              fill={svgColorUSD}
              width="15px"
              height="15px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1919.887h1467.88V452.008H0v1467.88ZM1354.965 564.922v1242.051H112.914V564.922h1242.051ZM1920 0v1467.992h-338.741v-113.027h225.827V112.914H565.035V338.74H452.008V0H1920ZM338.741 1016.93h790.397V904.016H338.74v112.914Zm0 451.062h790.397v-113.027H338.74v113.027Zm0-225.588h564.57v-112.913H338.74v112.913Z"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("Name of the bank")}</div>
          <div className="requs-title">
            JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE
          </div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("Bank SWIFT Code")}</div>
          <div className="requs-title">PBANUA2X</div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("Company address")}</div>
          <div className="requs-title">
            UA 90436 Закарпатська Хустський с Iза вул Мiчурiна б.5
          </div>
        </div>

        <div className="requs-second-title">{t("Correspondent banks")}</div>

        <div className="requs">
          <div className="requs-title">
            {t("Account in the correspondent bank")}
          </div>
          <div className="requs-title">001-1-000080</div>
        </div>
        <div className="requs">
          <div className="requs-title">
            {t("SWIFT Code of the correspondent bank")}
          </div>
          <div className="requs-title">CHASUS33</div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("Correspondent bank")}</div>
          <div className="requs-title">JP Morgan Chase Bank, New York ,USA</div>
        </div>
        <div className="requs-second-title">{t("or")}</div>
        <div className="requs">
          <div className="requs-title">
            {t("Account in the correspondent bank")}
          </div>
          <div className="requs-title">890-0085-754</div>
        </div>
        <div className="requs">
          <div className="requs-title">
            {t("SWIFT Code of the correspondent bank")}
          </div>
          <div className="requs-title">RVT US 3N</div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("Correspondent bank")}</div>
          <div className="requs-title">
            The Bank of New York Mellon, New York, USA
          </div>
        </div>

        <div className="requs">
          <div className="requs-title">
            {t("Account in the correspondent bank")}
          </div>
          <div className="requs-title">36445343</div>
        </div>
        <div className="requs">
          <div className="requs-title">
            {t("SWIFT Code of the correspondent bank")}
          </div>
          <div className="requs-title">CITI US 33</div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("Correspondent bank")}</div>
          <div className="requs-title">Citibank N.A., NEW YORK, USA</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="reqColPop">
        <div className="requs-second-title">{t("requisites second title")}</div>
        <div className="requs">
          <div className="requs-title">{t("Company details")}</div>
          <div className="requs-title">БФ НЕБО УКРАЇНИ</div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("IBAN Code")}</div>
          <div className="requs-title iban" id="ibanEUR">
            UA763052990000026002033608395
            <svg
              onClick={() => {
                CopyIbanEUR();
                changeSvgColorEUR();
              }}
              alt="copy iban"
              id="iconCopyEUR"
              fill={svgColorEUR}
              width="15px"
              height="15px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1919.887h1467.88V452.008H0v1467.88ZM1354.965 564.922v1242.051H112.914V564.922h1242.051ZM1920 0v1467.992h-338.741v-113.027h225.827V112.914H565.035V338.74H452.008V0H1920ZM338.741 1016.93h790.397V904.016H338.74v112.914Zm0 451.062h790.397v-113.027H338.74v113.027Zm0-225.588h564.57v-112.913H338.74v112.913Z"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("Name of the bank")}</div>
          <div className="requs-title">
            JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE
          </div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("Bank SWIFT Code")}</div>
          <div className="requs-title">PBANUA2X</div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("Company address")}</div>
          <div className="requs-title">
            UA 90436 Закарпатська Хустський с Iза вул Мiчурiна б.5
          </div>
        </div>

        <div className="requs-second-title">{t("Correspondent banks")}</div>

        <div className="requs">
          <div className="requs-title">
            {t("Account in the correspondent bank")}
          </div>
          <div className="requs-title">400886700401</div>
        </div>
        <div className="requs">
          <div className="requs-title">
            {t("SWIFT Code of the correspondent bank")}
            bank:
          </div>
          <div className="requs-title">COBADEFF</div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("Correspondent bank")}</div>
          <div className="requs-title">
            Commerzbank AG, Frankfurt am Main, Germany
          </div>
        </div>
        <div className="requs-second-title">{t("or")}</div>
        <div className="requs">
          <div className="requs-title">{t("Correspondent bank")}</div>
          <div className="requs-title">6231605145</div>
        </div>
        <div className="requs">
          <div className="requs-title">
            {t("SWIFT Code of the correspondent bank")}
          </div>
          <div className="requs-title">CHASDEFX</div>
        </div>
        <div className="requs">
          <div className="requs-title">{t("Correspondent bank")}</div>
          <div className="requs-title">
            J.P.MORGAN AG, FRANKFURT AM MAIN, GERMANY
          </div>
        </div>
      </div>
    );
  }
}
