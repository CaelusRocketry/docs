---
title: Aphlex 1C Engine - Inputs
sidebar_label: Input Overview
---
| Name | Symbol | Description | Value | Unit | CEAgui | Nozzle | Injector | Propsim |
| :-------- | :----------- | :--------------------------------- | :-- | :-- | :-- | :-- | :-- | :-- |
| Thrust| $F$ | Downward force exerted by engine |  | $N$ | No | Yes | No | No |
| Chamber Pressure | $P_0$ | Pressure in combustion chamber|  | $Pa$ | Yes | Yes | Yes | Yes |
| Oxidizer to Fuel Ratio | $O/F$ | Ratio of oxidizer mass to fuel mass | 4.0 | dimensionless | Yes | Yes | Yes | Yes |
| Operational Altitude | $ALT$ | Altitude where exhaust gas does not expand|  | $m$ | Yes | Yes | Yes | Yes |
| L-star | $L^*$ | Length needed for adequate mixing of propellants|  | $m$ | No | Yes | No | Yes |
| Ambient Temperature | $T_3$ | Temperature outside the engine| 298 | $K$ | Yes | No | No | Yes | 
| Oxidizer density | $\rho_{o}$ | Density of oxidizer | | $kg/m^{3}$ | No | No | Yes | Yes |
| Fuel density | $\rho_{f}$  | Density of fuel | | $kg/m^{3}$ | No | No | Yes | Yes |
| Injector Pressure Drop | $\Delta{P}_{inj}$ | Pressure drop across injector (stifness) |  | % | No | No | Yes | No |
| Oxidizer Orifice Starting Diameter | $d_{o,i}$ | Initital oxidizer orifice diameter based on manufacturing | | $mm$ | No | No | Yes | No |
| Fuel Orifice Starting Diameter | $d_{f,i}$ | Initital fuel orifice diameter based on manufacturing | | $mm$ | No | No | Yes | No |
| Oxidizer Orifice Discharge Coefficient | $Cd_{o}$ | Fill | | dimensionless | No | No | Yes | Yes |
| Fuel Orifice Discharge Coefficient | $Cd_{f}$ | Fill | | dimensionless | No | No | Yes | Yes |
| Impingement Angle | $\lambda$ | Arranged angle of impinging injector orifices | No | No | Yes | No |

<!-- | Frozen Flow | f | Assumes gas composition at exit matches that in the chamber | False | Boolean | Yes | No | No | No | -->
