---
title: TSPCB
sidebar_label: Test Stand
---
Test Stand PCB[^1], also known as CaelusPCB, TSPCB, or Flight Hardware is controlled by a teensy3.6. The PCB allows the teensy to read data from sensors and actuate valves, which are controlled by [**Flight Software**](..\docs\programming\fs\overview.mdx).

![image](CaelusPCB2-4@19_44.jpg)

## Valves
Solenoid valves can be controlled through the Test Stand Teensy that runs Flight Software. The signal is sent from the teensy to a IC chip that acts as a switch and allows launchbox to override the test stand. The signal is sent through a screw terminal and to a relay which allows test stand to actuate the 12V and 24V valves.

|TS Teensy Pin|Screw Terminal|Valve|
|:------------|:-------------|:----|
|4|U4|NCSV-1|
|39|U7|NCSV-2|
|6|U6|NCSV-3|
|5|U5|NCSV-4|
|11|U11|NOSV-1|
|9|U12|NCSV-5|

## Ethernet
The other end of the Ethernet cable that is connected to [**Lauchbox**](launchbox.md) is wired to 3 pairs of screw terminals that connect the ethernet to the decoders on TestStand[^2].

Wiring to right screw terminals from top to bottom:
1. Brown
2. Striped-Brown
3. Blue
---
4. Striped-Blue
5. Green
6. Striped-Green
---
7. Orange
8. Striped-Orange
9. EMPTY


[^1]: Last updated 2/4/21 @ 19:44
[^2]: This is a temporary fix until TSPCBV2 is wired and decoders are implemented.