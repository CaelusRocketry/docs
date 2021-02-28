---
title: Aphlex 1C Engine - Injector
sidebar_label: Injector
---

### Overview
Intro Paragraph k- write about stuffs

## Inputs
| Name | Symbol | Value | Unit |
| :----------- | :------------ | :--- | :--- |
| Total Mass Flow Rate | $\dot{m}$ | | $\frac{kg}{sec}$ |
| Oxidizer to fuel ratio | $OF$ | | dimensionless |
| Fuel density | $\rho_{f}$  | | $\frac{kg}{m^{3}}$ |
| Oxidizer density | $\rho_{o}$ | | $\frac{kg}{m^{3}}$ |
| Chamber pressure | $P_{0}$ | | Pa | 
| Pressure drop across injector | $\Delta_{p}$ | | % (of chamber pressure) |
| Starting diameter of oxidizer orifice | $d_{o}$ | 1.58 | mm |
| Discharge coefficient of oxidizer orifice | $Cd_{o}$ | 0.9 | dimensionless |
| Starting diameter of fuel oriface | $d_{f}$ | 1.00 | mm | 
| Discharge coefficient of fuel orifice | $Cd_{f}$ | 0.88 | dimensionless | 
| Impingement angle | $\lambda$ | 60 | °degrees | 
| Jet length to distance between orifices ratio* | $\frac{L}{D}$ | 6 | dimensionless
*Obtained from NASA SP-8089
## Functions
| Name | Equation | Reference |
| :- | :---------------------------------- | :------ |
| Total area of orifices | $A = \frac{Q}{C_{d}\sqrt{2\rho\delta{p}}}$ | ooga|
| Number of oxidizer orifices | $n_{o} = \frac{\dot{m}_{o}}{\dot{m}_{oi}}$| booga|
| Number of fuel orifices | $n_{f} = \frac{\dot{m}_{o}}{\dot{m}_{of}}$|shrimp r e🅱️ic >:0 |
| Diameter of oxidier orifices | $d_{o} = 2\sqrt{\frac{\dot{m}}{C_{d}n_{o}\pi\sqrt{2\rho\Delta p}}}$ | |
| Diameter of fuel orifices |$d_{f} = 2\sqrt{\frac{\dot{m}}{C_{d}n_{f}\pi\sqrt{2\rho\Delta p}}}$ | |
| Length of injector | $L_{inj} = 10d_{max}\cos\frac{\lambda}{2}$ | |
| Length of fuel jet | $L_{jet_{f}}=\frac{L}{D} d_{f}$ | |
| Length of oxidizer jet| $L_{jet_{o}} =\frac{L}{D} d_{o}$ | |
| Length of point of impingement oxidizer| $L_{POI_{o}} = L_{jet_{o}}\cos \lambda$
| Length of point of impingement fuel| $L_{POI_{f}} = L_{jet_{f}}\cos\lambda$
| Distance between oxidizer orifices on the combustor side | $d_{com_{o}} = 2L_{jet_{o}}sin (90\degree - \lambda)$| |
| Distance between fuel orifices on the combustor side | $d_{com_{f}} = 2L_{jet_{f}}sin (90\degree - \lambda)$| |
| Distance between oxidizer orifices on the manifold side|$d_{man_{o}} =\frac{\frac{d_{com_{o}}}{L_{POI_{o}}}}{L_{inj}+L_{POI_{o}}} $|
| Distance between fuel orifaces on the manifold side | $d_{man_{f}} =\frac{\frac{d_{com_{f}}}{L_{POI_{f}}}}{L_{inj}+L_{POI_{f}}} $ |

##Outputs
| Name | Symbol | Units |
| :- | :---------------------------------- | :------ |
| Number of oxidizer orifices | $n_{o}$| dimensionless |
| Diameter of oxidizer orifice | $d_{o}$ | mm |
| Area of oxidizer orifice | $a_{o}$  | mm$^{2}$ |
| Oxidizer jet length | $L_{jet_{o}}$ | mm |
| Oxidizer point of impigement distance | $L_{poi_{o}}$ | mm |
| Oxidizer fuel distance (combustor) | $d_{com_{f}} $ | mm |
| Oxidizer fuel distance (manifold) | $d_{man_{f}}$ | mm |
| Oxidizer orifice distance (combustor) | $d_{com_o}$ | mm |
| Oxidizer orifice distance (manifold) | $d_{man_o}$ | mm |
| Number of fuel orifices | $n_{f}$ | dimensionless |
| Diameter of fuel orifice | $d_{f}$ | mm |
| Area of fuel orifice | $a_{f}$ | mm$^{2}$ | 
| Fuel jet length | $L_{jet_{f}}$ | mm
| Fuel point of impigement distance | $L_{poi_{f}}$ | mm |
| Injector plate thickness | $L_{inj}$ | mm |
