---
title: Aphlex 1C Engine - CEAgui
sidebar_label: CEAgui
---

## Overview
The first step in designing the Aphlex 1C engine is to calculate several chemical and thermodynamic parameters using CEAgui. CEAgui (Chemical Equilibrium with Applications) is a program developed by NASA's Glenn Research Center for calculating advanced chemical properties and interactions for propellant combustion in rocket engines. By using CEAgui, we can find values for the ratio of specific heats ($k$), combustion temperature ($T_0$), molecular mass of gas ($M$), characteristic velocity ($c*$), and specific impulse ($Isp$). In conjuction with the following programs, we can find driving paramaters of engine performance such as thrust. 


## Inputs
| Name | Symbol | Description | Value | Unit |
| :----------- | :------------ | :------------------------------------------------------------------------------------ | :--- |
| Oxidizer to Fuel Ratio | $O/F$ |Ratio of mass of oxidizer to fuel | 4.0 | No Units |
| Chamber Pressure | $P_0$ | | | $Pa$ |
| Altitude | $H$ | | | $m$ |
| Frozen Flow | None | Assumes reactant do not react further in expansion | False | Boolean |
| Fuel | None | Propellant | Denatured Ethanol (95% by weight) and Water (5% by weight) | None |
| Oxidizer | None | Propellant | Nitrous oxide| None |
| Ambient Temperature | $T_3$ | Temperature of oxidizer and fuel | 293 | K |


## Program Structure and Function
The main method calls `cea_inp(data: dict, case_name: str)` to create a .inp file for CEAgui to read. The inputed dictionary retrieves all inputs, and with this method, writes and formats the input for CEAgui. This method also creates a new directory to store all files throughout the process, and returns the directory name, `case_dir`. Next, the method calls `cea_driver(case_name, case_dir)` to do two tasks: 1. begin a thread, 2. call CEAgui as a subprocess. Prior to doing this, the .inp file is moved to the same directory as CEAgui to ensure the .exe can reach all helper functions such as thermo.lib.  CEAgui is called and asks for a file path to the .inp file. The thread calls the `type_with_delay(case_dir: str ,  delay: float)` to type in the file path to begin CEAgui. CEAgui outputs a .out file which is immediately with the .inp file moved to `case_dir` to be parsed. `cea_outparse(data: dict, case_name: str, case_dir: str)` is lastly called to iterate through the .out file's lines to find the desired outputs. The outputs are added to the dict and used to write a .csv file. The method returns the dict as an input for the following functions. 


## Outputs
| Name | Symbol | Descriptions | Value | Unit |
| :----------- | :------------ | :------------------------------------------------------------------------------------ | :--- | :--- 
| Throat Pressure | $P_1$ | | | $Pa$ |
| Specific Impulse | $I_{sp}$ | Impulse per unit weight | | $m/s$ |
| Characteristic Velocity | $c^*$ | Ideal velocity of the system | | $m/s$ |
| Ratio of Specific Heats | $\gamma$ | Determines thermodynamic properties in isentropic flow | | No Units |
| Molecular Mass | $M$ | | | $kg/mol$ |

