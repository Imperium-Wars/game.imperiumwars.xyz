/* eslint-disable @next/next/no-img-element */
import { Modal } from "@mui/material";
import React, { FunctionComponent } from "react";
import styles from "../../styles/territories.module.css";
import { TerritoryData } from "./territoriesData";
import TerritoryContent from "./territoryContent";

type MobileTerritoryProps = {
  territory: TerritoryData;
  isOpen: boolean;
  onClose: () => void;
};

const MobileTerritory: FunctionComponent<MobileTerritoryProps> = ({
  territory,
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      disableAutoFocus
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.territoryModal}>
        <button className={styles.territoryModalClose} onClick={onClose}>
          <svg viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <h1 className={styles.countryName}>{territory.name}</h1>
        <div className={styles.mobileTerritoryContainer}>
          <div className={styles.mobileTerritoryImages}>
            <img
              className={styles.mobileTerritoryImage}
              src={
                territory?.isAtWar
                  ? `/territories/war/${territory.name.replace(/\s/g, "")}.webp`
                  : `/territories/peace/${territory.name.replace(
                      /\s/g,
                      ""
                    )}.webp`
              }
              width={204}
              alt="territory image"
            />
            <img
              className={styles.mobileTerritoryCadre}
              src="/frames/territoryFrame.webp"
              width={273}
              alt="territory image"
            />
          </div>
          <div className={styles.mobileTerritoryContent}>
            {territory.continent ? (
              <TerritoryContent title="Continent" text={territory.continent} />
            ) : null}
            {territory.type ? (
              <TerritoryContent title="Territory type" text={territory.type} />
            ) : null}
            {territory.apogee ? (
              <TerritoryContent
                title="Territory apogee"
                text={territory.apogee}
              />
            ) : null}
            <TerritoryContent title="History" text={territory.history} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MobileTerritory;
