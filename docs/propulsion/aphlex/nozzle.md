---
title: Aphlex 1C Engine - Nozzle
sidebar_label: Nozzle
---

## Overview
The second step in designing the Aphlex 1C engine involves determining nozzle dimensions. nozzle.py attempts to calculate these paramaters by using properties of combustion ascertained by CEAgui. Information on the dimensions of the "significant" portions of the nozzle such as the throat, allows us to design an optimized geometry of a rocket nozzle. This alows for further analysis using CFD to determine other properties of Callisto 1.  

## Inputs
| Name | Symbol | Value | Unit | Origin |
| :----------- | :------------ | :--- | :--- | :--- |
| Desired Thrust | $F$ | 5 | $kN$ | |
| Chamber Pressure | $P_{0}$ | placeholder | $MPa$ | |
| Altitude (optional) | $ALT$ | placeholder | unit | |
| Oxidizer to fuel ratio | $O/F$ | placeholder | dimensionless | | 
| Combustion chamber temperature| $TO$ | placeholder | $K$ |  |
| Molecular mass of the gas | $M$ | placeholder | $kg/mol$ |  |
| Ratio of specific hear capacities | $k$ | placeholder | dimensionless | | 
| Characteristic chamber length | $L*$ | placeholder | $m$ |  |

## Formulas
| Name | Equation | Reference |
| :- | :---------------------------------- | :------ |
| Mass Flow Rate | $\frac{F_t}{c}$ | |
| R (placeholder) | $\frac{R_{u}}{M}$ | |
| Pressure Ratio | $\frac{P_{exit}}{P_{chamber}}$ | |
| AR | $A_{R} = {\frac{k+1}{2}}{\frac{1}{k-1}}{{\frac{P_{3}}{P_{0}}}{\frac{1}{k}}{\sqrt{\frac{k+1}{k-1}{(1-\frac{P_{3}}{P_{0}}{\frac{k-1}{k}})}}}}$ 
| $ER$ | $\frac{1}{A_{R}}$ | 
| $T_{t}$ | $\frac{2*{TO}}{k + 1}$ |
| $v_{2}$ | $\sqrt{\frac{2k}{k-1}*RT_{0}(1-{\frac{P_{3}}{P_{0}}}\frac{k-1}{k})}$
| $\dot{m}$| $\frac{F}{v_{2}}$ | 
| $\dot{m}$ fuel | $\frac{\dot{m}}{OF + 1}$ | 
| $\dot{m}$ oxidizer | $\frac{\dot{m}}{OF + 1} * OF$ | 
| $I_{sp}$ | $\frac{F}{\dot{m}{g}}$
| $T_{e}$ | $\frac{TO}{({\frac{P_{0}}{P_{3}}})^\frac{k-1}{k}}$
| $M_{num}$ | $\frac{v_{2}}{\sqrt{k*{R}*{T_{e}}}}$
| $A_{t}$ | $\frac{\dot{m}\sqrt{k*{R}*{T_{0}}}}{k{P_{0}}{\sqrt{(\frac{2}{k+1})(\frac{k+1}{k-1})}}}$
| $A_{e}$ | $ER\times{AR}$ |
| $R_{t}$ | $\sqrt{\frac{A_{t}}{\pi}}$| 
| $R_{e}$ | $\sqrt{\frac{A_{e}}{\pi}}$| 
| $A_{c}$ | $8A_{e}$ | 
| $R_{c}$ | $\sqrt{\frac{A_{c}}{\pi}}$| 
| $L_{c}$ | $\frac{A_{t}\times{L_{*}}}{A_{c}}$
| $L_{dn}$ | $\frac{R_{e} - R_{t}}{tan(15)}$
| $L_{cn}$ | $\frac{R_{c} - R_{t}}{tan(45)}$

## Program Structure and Functions
`nozzle_main(data: dict)` inputs `data`, a recurring dictionary which is passed through each program. Using the formulas from (insert here) calculate the nozzle dimensions and store them back into `data` to be returned. 

## Outputs
| Name | Symbol | Value | Unit |
| :----------- | :------------ | :--- | :--- |
| Specific impulse at altitude | $Isp$ | | $s$ | 
| Throat temperature | $T_{t}$ |  | $K$ | 
| Effective exhaust velocity | $v_{2}$ |  | $m/s$ | 
| Mass flow rate | $\dot{m}$ |  | $kg/s$ | 
| Mass flow rate of the oxidizer | $\dot{m}_{oxidizer}$ |  | $kg/s$ | 
| Mass flow rate of the fuel | $\dot{m}_{fuel}$ |  | $kg/s$ | 
| Pressure Ratio | $PR$ |  | dimensionless | 
| Expansion ratio | $ER$ |  | dimensionless | 
| Exit temperature | $T_{e}$ |  | $K$ | 
| Exit Mach number | $M_{num}$ |  | $m/s$ | 
| Area of the throat | $A_{t}$ |  | $m^2$ | 
| Area of the exit | $A_{e}$ |  | $m^2$ | 
| Radius of the throat | $R_{t}$ |  | $m$ | 
| Radius of the exit | $R_{e}$ |  | $m$ | 
| Radius of the chamber | $R_{c}$ |  | $m$ | 
| Length of the chamber | $L_{c}$ |  | $m$ | 
| Length of the diverging nozzle | $L_{dn}$ |  | $m$ | 
| Length of the converging nozzle | $L_{cn}$ |  | $m$ | 