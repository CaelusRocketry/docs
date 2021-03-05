---
title: Aphlex 1C Engine - Parameter Overview
sidebar_label: Parameter Overview
---

The **Aphlex 1C** engine is the third engine iteration in Project Caelus's development process of the Aphlex 1 engine. The primary goal of the Aphlex 1 engine family is to utilize an ethanol/nitrous oxide liquid bipropellant engine to launch a rocket to an altitude of 5,000 feet. The primary motivation for this redesign following the Aphlex 1B engine is to increase chamber pressure and thrust to better utilize available hardware and pressure abilities, ensuring the system's performance is optimized. The Aphlex 1C engine will be the final engine iteration before a static engine fire, expected in June 2021. This engine will likely be proceeded by Aphlex 1D which will make modifications based on static fire success and modifications to prepare the engine for flight.

## Key Variable Summary
| Name | Symbol | Description | Value | Unit | Source |
| :----------- | :------------ | :------------------------------------------------------------- | :--- | :--- | :--- |
| Thrust  | $F$ | Force produced by engine | 2000 | $N$ | |
| Mass Flowrate  | $\dot{m}$ | Total propellant mass flowing into combustion chamber per unit time | 1.2 | $kg/s$ | |
| Combustion Chamber Presure  | $P_0$ | Pressure of combustion within engine | 2 | $MPa$ | |
| Burn Time | $t$ | Total duration of engine burn | 3 | $sec$ | |

## All Variable Summary
| Variable Name                 | Symbol | Description | Value     | Unit           | Source |
| ----------------------------- | ------ | ----------- | --------- | -------------- | ------ |
| Thrust                        | $F$      | Force produced by engine | 2000.0    | $N$              | | 
| Operational altitude          | $A_0$     | Altitude where the pressure of the exhaust gas is equal to the ambient pressure, resulting in no expansion or contraction            | 0\*       | $m$ | |
| Combustion chamber pressure   | $P_0$    |Pressure of combustion within engine             | 2000000.0 | $Pa$             | |
| Ratio of specific heats       | $k$      |             | ?         | Dimensionless  | |
| Combustion temperature        | $T_0$     | Temperature in the chamber during the combustion of propellants            | ?         | $K$              | |
| Molecular mass of gas         | $M$      |             | ?         | $kg/mol$         | |
| Oxidizer to fuel ratio        | $O/F$    | ratio of the mass of oxidizer to the mass of fuel            | 4.0       | Dimensionless  | |
| Characteristic chamber length | $L^{*}$   |             | ?         | $m$              | |
| Burn time                     | $t$      | Total duration of engine burn	| 3.0       | $sec$            | |
| Coefficient of flow           | $Cv$    | Number of gallons that will flow through a valve per minute with 1 psi pressure drop            | 0.8       | Dimensionless | |
| Ullage                        | $U$      |             | ?         | $\%$              | |
| Specific Gravity              | $SG$     |             | ?         | Dimensionless  | |
| Pressure drop                 | $\Delta{P}$     |             | ?         | $psi$            | |
| Tank volume                   | $V_T$     |Volume of tank in liters             | ?         | $L$              | |
| Tank temperature              | $T_T$     | Temperature within the tank             | ?         | $K$              | |
| Specific impulse at altitude  | $Isp$    |             | Tbd       | $sec$            | |
| Throat temperature            | $T_t$     |             | Tbd       | $K$              | |
| Effective exhaust velocity    | $v^2$     |             | Tbd       | $m/sec$          | |
| Mass flow rate                | $\dot{m}$      | Total propellant mass flowing into combustion chamber per unit time            | Tbd       | $kg/sec$         | |
| Fuel mass flow rate           | $\dot{m}_f$     |             | Tbd       | $kg/sec$         | |
| Oxidizer mass flow rate       | $\dot{m}_o$     |             | Tbd       | $kg/sec$         | |
| Pressure ratio                | $R_P$     |             | Tbd       | Dimensionless  | |
| Expansion ratio               | $R_E$     |             | Tbd       | Dimensionless  | |
| Exit temperature              | $T_e$     |Temperature of exiting mass  | Tbd       | $K$              | |
| Exit Mach number              | $M$      |             | Tbd       | Dimensionless  | |
| Throat area                   | $A_t$     |             | Tbd       | $m^2$             | |
| Exit area                     | $A_e$     |             | Tbd       | $m^2$             | |
| Throat radius                 | $R_t$     |             | Tbd       | $m$              | |
| Exit radius                   | $R_e$     |             | Tbd       | $m$              | |
| Chamber radius                | $R_e$     |             | Tbd       | $m$              | |
| Chamber length                | $L_C$     |             | Tbd       | $m$              | |
| Converging section length     | $L_{con}$   |             | Tbd       | $m$              | |
| Diverging section length      | $L_{div}$   |             | Tbd       | $m$              | |
| Fuel volumetric flow rate     | $Q_f$     |             | Tbd       | $L/sec$         | |
| Oxidizer volumetric flow rate | $Q_o$     |             | Tbd       | $L/sec$         | |
| Initial fuel mass             | $m_{0,f}$    |             | Tbd       | $kg$             | |
| Initial oxidizer mass         | $m_{0,o}$    |             | Tbd       | $kg$             | |
| Initial ethanol tank pressure | $P_{0,f}$    |             | Tbd       | $psi$            | |
| Initial nitrous tank pressure | $P_{0,o}$    |             | Tbd       | $psi$            | |
| System pressure drop          | $\Delta{P_{sys}}$  |             | Tbd       | $psi$   | |