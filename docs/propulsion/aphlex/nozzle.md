---
title: Aphlex 1C Engine - Nozzle
sidebar_label: Nozzle
---

## Overview
Intro Paragraph - write about stuffs
## Here we do things and stuff 

## Inputs
| Name | Symbol | Value | Unit |
| :----------- | :------------ | :--- | :--- |
| Desired Thrust | $F$ | 5 | kN |
| Chamber Pressure | $P_{0}$ | placeholder | MPa |  
| Altitude (optional) | $ALT$ | placeholder | unit |
| Oxidizer to fuel ratio | $O/F$ | placeholder | dimensional | 
| Combustion chamber temperature| $TO$ | placeholder | K | 
| Molecular mass of the gas | $M$ | placeholder | kg/mol | 
| Ratio of specific hear capacities | $k$ | placeholder | dimensionless | 
| Characteristic chamber length | $L*$ | placeholder | m |  

## Functions
| Name | Equation | Reference |
| :- | :---------------------------------- | :------ |
| Mass Flow Rate | $\frac{F_t}{c}$ | |
| R (placeholder) | $\frac{R_{u}}{M}$ | |
| Pressure Ratio | $\frac{P_{exit}}{P_{chamber}}$ | |
| AR | $A_{R} = {(\frac{k+1}{2})}{(\frac{1}{k-1})}{{(\frac{P_{3}}{P_{0}}}){(\frac{1}{k})}{\sqrt{\frac{k+1}{k-1}\times{(1-(\frac{P_{3}}{P_{0}}\times{\frac{k-1}{k}}))}}}}$ 
| $ER$ | $\frac{1}{A_{R}}$ | 
| $Tt$ | $\frac{2\times{TO}}{k + 1}$ |
| $V_{2}$ | $\sqrt{(\frac{2k}{k-1})(RT_{0})(1-({\frac{P_{3}}{P_{0}}}\times{\frac{k-1}{k}}))}$
| $\dot{m}$| $\frac{F}{V_{2}}$ | 
| $\dot{m}$ fuel | $\frac{\dot{m}}{(OF + 1)}$ | 
| $\dot{m}$ oxidizer | $(\frac{\dot{m}}{(OF + 1)})\times OF$ | 
| $I_{sp}$ | $\frac{F}{\dot{m}{g}}$
| $T_{e}$ | $\frac{TO}{(({\frac{P_{0}}{P_{3}}})^\frac{k-1}{k})}$
| $M_{num}$ | $\frac{v_{2}}{\sqrt{k\times{R}\times{T_{e}}}}$
| $A_{t}$ | $\frac{\dot{m}\sqrt{k\times{R}\times{T_{0}}}}{k\times{P_{0}}\times{\sqrt{(\frac{2}{k+1})(\frac{k+1}{k-1})}}}$
| $A_{e}$ | $ER\times{AR}$ |
| $R_{t}$ | $\sqrt{\frac{A_{t}}{\pi}}$| 
| $R_{e}$ | $\sqrt{\frac{A_{e}}{\pi}}$| 
| $A_{c}$ | $8A_{e}$ | 
| $R_{c}$ | $\sqrt{\frac{A_{c}}{\pi}}$| 
| $L_{c}$ | $\frac{A_{t}\times{L_{*}}}{A_{c}}$
| $L_{dn}$ | $\frac{(R_{e} - R_{t})}{tan(15)}$
| $L_{cn}$ | $\frac{(R_{c} - R_{t})}{tan(45)}$


## Outputs
| Name | Symbol | Value | Unit |
| :----------- | :------------ | :--- | :--- |
| Example | $E$ | 5 | kN |
| Specific impulse at altitude | $Isp$ | idk | sec | 
| Throat temperature | $Tt$ | lol | K | 
| Effective exhaust velocity | $v2$ | Ron | m/sec | 
| Mass flow rate | $\dot{m}$ | is | kg/sec | 
| Mass flow rate of the oxidizer | $\dot{m}_{oxidizer}$ | a | kg/sec | 
| Mass flow rate of the fuel | $\dot{m}_{fuel}$ | muscle | kg/sec | 
| Pressure Ratio | $PR$ | man | dimensionless | 
| Expansion ratio | $ER$ | and | dimensionless | 
| Exit temperature | $Te$ | he | K | 
| Exit Mach number | $M_{num}$ | bullies | dimension | 
| Area of the throat | $At$ | freshman | m^2 | 
| Area of the exit | $Ae$ | because | m^2 | 
| Radius of the throat | $Rt$ | he | m | 
| Radius of the exit | $Re$ | wants | m | 
| Radius of the chamber | $Rc$ | to. | m | 
| Length of the chamber | $Lc$ | hashtag | m | 
| Length of the diverging nozzle | $Ldn$ | stop | m | 
| Length of the converging nozzle | $Lcn$ | freshman abuse | m | 