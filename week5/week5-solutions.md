# 第五周练习题答案

## 一、基础题

### 1. 链式法则求导

**(1) $y = \sin(3x + 1)$**

解：设 $u = 3x + 1$，则 $y = \sin u$
$\frac{dy}{du} = \cos u$，$\frac{du}{dx} = 3$
$\frac{dy}{dx} = \cos(3x + 1) \cdot 3 = 3\cos(3x + 1)$

**(2) $y = e^{x^2 + 2x}$**

解：设 $u = x^2 + 2x$，则 $y = e^u$
$\frac{dy}{du} = e^u$，$\frac{du}{dx} = 2x + 2$
$\frac{dy}{dx} = e^{x^2 + 2x} \cdot (2x + 2) = 2(x + 1)e^{x^2 + 2x}$

**(3) $y = \ln(\cos x)$**

解：设 $u = \cos x$，则 $y = \ln u$
$\frac{dy}{du} = \frac{1}{u}$，$\frac{du}{dx} = -\sin x$
$\frac{dy}{dx} = \frac{1}{\cos x} \cdot (-\sin x) = -\tan x$

**(4) $y = \sqrt{1 - x^2}$**

解：设 $u = 1 - x^2$，则 $y = u^{1/2}$
$\frac{dy}{du} = \frac{1}{2}u^{-1/2}$，$\frac{du}{dx} = -2x$
$\frac{dy}{dx} = \frac{1}{2}(1 - x^2)^{-1/2} \cdot (-2x) = -\frac{x}{\sqrt{1 - x^2}}$

**(5) $y = \tan^2(2x)$**

解：设 $u = 2x$，$v = \tan u$，则 $y = v^2$
$\frac{dy}{dv} = 2v$，$\frac{dv}{du} = \sec^2 u$，$\frac{du}{dx} = 2$
$\frac{dy}{dx} = 2\tan(2x) \cdot \sec^2(2x) \cdot 2 = 4\tan(2x)\sec^2(2x)$

### 2. 隐函数求导

**(1) $x^3 + y^3 - 3xy = 0$（笛卡儿叶形线）**

解：两边对 $x$ 求导：
$3x^2 + 3y^2 \cdot y' - 3(y + x \cdot y') = 0$
整理得：
$3y^2 \cdot y' - 3x \cdot y' = 3y - 3x^2$
$y'(y^2 - x) = y - x^2$
$y' = \frac{y - x^2}{y^2 - x}$

**(2) $e^{x+y} + xy = 0$**

解：两边对 $x$ 求导：
$e^{x+y} \cdot (1 + y') + y + x \cdot y' = 0$
整理得：
$e^{x+y} + e^{x+y} \cdot y' + y + x \cdot y' = 0$
$y'(e^{x+y} + x) = -e^{x+y} - y$
$y' = -\frac{e^{x+y} + y}{e^{x+y} + x}$

**(3) $\arctan\frac{y}{x} = \ln\sqrt{x^2 + y^2}$**

解：先化简右边：$\ln\sqrt{x^2 + y^2} = \frac{1}{2}\ln(x^2 + y^2)$
两边对 $x$ 求导：
$\frac{1}{1 + (y/x)^2} \cdot \frac{y'x - y}{x^2} = \frac{1}{2} \cdot \frac{2x + 2y \cdot y'}{x^2 + y^2}$
化简左边：
$\frac{x^2}{x^2 + y^2} \cdot \frac{xy' - y}{x^2} = \frac{xy' - y}{x^2 + y^2}$
右边：
$\frac{x + y \cdot y'}{x^2 + y^2}$
所以：
$xy' - y = x + y \cdot y'$
$xy' - y \cdot y' = x + y$
$y'(x - y) = x + y$
$y' = \frac{x + y}{x - y}$

**(4) $x^2 + xy + y^2 = 4$**

解：两边对 $x$ 求导：
$2x + y + x \cdot y' + 2y \cdot y' = 0$
整理得：
$y'(x + 2y) = -2x - y$
$y' = -\frac{2x + y}{x + 2y}$

**(5) $\sin(x+y) = x - y$**

解：两边对 $x$ 求导：
$\cos(x+y) \cdot (1 + y') = 1 - y'$
展开得：
$\cos(x+y) + \cos(x+y) \cdot y' = 1 - y'$
$\cos(x+y) \cdot y' + y' = 1 - \cos(x+y)$
$y'(1 + \cos(x+y)) = 1 - \cos(x+y)$
$y' = \frac{1 - \cos(x+y)}{1 + \cos(x+y)}$

### 3. 参数方程求导

**(1) $\begin{cases} x = t^2 \\ y = t^3 - 3t \end{cases}$**

解：
一阶导数：$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{3t^2 - 3}{2t} = \frac{3(t^2 - 1)}{2t}$
二阶导数：$\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}(\frac{3(t^2 - 1)}{2t})}{\frac{dx}{dt}} = \frac{\frac{3(2t \cdot 2t - 2(t^2 - 1))}{4t^2}}{2t} = \frac{3(2t^2 + 2)}{8t^3} = \frac{3(t^2 + 1)}{4t^3}$

**(2) $\begin{cases} x = a(t - \sin t) \\ y = a(1 - \cos t) \end{cases}$（摆线）**

解：
一阶导数：$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{a \sin t}{a(1 - \cos t)} = \frac{\sin t}{1 - \cos t} = \cot\frac{t}{2}$
二阶导数：$\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}(\cot\frac{t}{2})}{\frac{dx}{dt}} = \frac{-\frac{1}{2}\csc^2\frac{t}{2}}{a(1 - \cos t)} = \frac{-\frac{1}{2\sin^2\frac{t}{2}}}{2a\sin^2\frac{t}{2}} = -\frac{1}{4a\sin^4\frac{t}{2}}$

**(3) $\begin{cases} x = e^t \cos t \\ y = e^t \sin t \end{cases}$**

解：
一阶导数：$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{e^t \sin t + e^t \cos t}{e^t \cos t - e^t \sin t} = \frac{\sin t + \cos t}{\cos t - \sin t}$
二阶导数：$\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}(\frac{\sin t + \cos t}{\cos t - \sin t})}{\frac{dx}{dt}}$
分子求导：
$\frac{(\cos t - \sin t)(\cos t - \sin t) - (\sin t + \cos t)(-\sin t - \cos t)}{(\cos t - \sin t)^2} = \frac{(\cos t - \sin t)^2 + (\sin t + \cos t)^2}{(\cos t - \sin t)^2} = \frac{2}{(\cos t - \sin t)^2}$
所以二阶导数：$\frac{\frac{2}{(\cos t - \sin t)^2}}{e^t(\cos t - \sin t)} = \frac{2}{e^t(\cos t - \sin t)^3}$

### 4. 对数求导法

**(1) $y = x^{\sin x}$**

解：取对数得 $\ln y = \sin x \ln x$
两边求导：$\frac{1}{y} \cdot y' = \cos x \ln x + \sin x \cdot \frac{1}{x}$
$y' = y(\cos x \ln x + \frac{\sin x}{x}) = x^{\sin x}(\cos x \ln x + \frac{\sin x}{x})$

**(2) $y = (\ln x)^x$**

解：取对数得 $\ln y = x \ln(\ln x)$
两边求导：$\frac{1}{y} \cdot y' = \ln(\ln x) + x \cdot \frac{1}{\ln x} \cdot \frac{1}{x} = \ln(\ln x) + \frac{1}{\ln x}$
$y' = y(\ln(\ln x) + \frac{1}{\ln x}) = (\ln x)^x(\ln(\ln x) + \frac{1}{\ln x})$

**(3) $y = \frac{(x+1)(x+2)}{(x-1)(x-2)}$**

解：取对数得 $\ln y = \ln(x+1) + \ln(x+2) - \ln(x-1) - \ln(x-2)$
两边求导：$\frac{1}{y} \cdot y' = \frac{1}{x+1} + \frac{1}{x+2} - \frac{1}{x-1} - \frac{1}{x-2}$
$y' = y(\frac{1}{x+1} + \frac{1}{x+2} - \frac{1}{x-1} - \frac{1}{x-2})$

**(4) $y = \sqrt{\frac{(x+1)(x+2)}{(x-1)(x-2)}}$**

解：取对数得 $\ln y = \frac{1}{2}(\ln(x+1) + \ln(x+2) - \ln(x-1) - \ln(x-2))$
两边求导：$\frac{1}{y} \cdot y' = \frac{1}{2}(\frac{1}{x+1} + \frac{1}{x+2} - \frac{1}{x-1} - \frac{1}{x-2})$
$y' = \frac{y}{2}(\frac{1}{x+1} + \frac{1}{x+2} - \frac{1}{x-1} - \frac{1}{x-2})$

### 5. 高阶导数

**(1) $y = x^3 e^x$**

解：使用莱布尼茨公式，$u = x^3$，$v = e^x$
$y' = 3x^2 e^x + x^3 e^x = e^x(x^3 + 3x^2)$
$y'' = e^x(x^3 + 3x^2) + e^x(3x^2 + 6x) = e^x(x^3 + 6x^2 + 6x)$

**(2) $y = \ln(1 + x^2)$**

解：
$y' = \frac{2x}{1 + x^2}$
$y'' = \frac{2(1 + x^2) - 2x \cdot 2x}{(1 + x^2)^2} = \frac{2(1 - x^2)}{(1 + x^2)^2}$

**(3) $y = \sin^2 x$**

解：
$y' = 2\sin x \cos x = \sin 2x$
$y'' = 2\cos 2x$

**(4) $y = \frac{1}{x^2 - 1}$**

解：
$y = \frac{1}{2}(\frac{1}{x-1} - \frac{1}{x+1})$
$y' = \frac{1}{2}(-\frac{1}{(x-1)^2} + \frac{1}{(x+1)^2})$
$y'' = \frac{1}{2}(\frac{2}{(x-1)^3} - \frac{2}{(x+1)^3}) = \frac{1}{(x-1)^3} - \frac{1}{(x+1)^3}$

## 二、中级题

### 6. 复合函数高阶导数

**(1) 设 $y = \sin(f(x))$，其中 $f(x)$ 具有二阶导数，求 $y''$。**

解：
$y' = \cos(f(x)) \cdot f'(x)$
$y'' = -\sin(f(x)) \cdot (f'(x))^2 + \cos(f(x)) \cdot f''(x)$

**(2) 设 $y = f(e^x)$，其中 $f(u)$ 具有二阶导数，求 $y''$。**

解：
$y' = f'(e^x) \cdot e^x$
$y'' = f''(e^x) \cdot e^x \cdot e^x + f'(e^x) \cdot e^x = e^x f'(e^x) + e^{2x} f''(e^x)$

**(3) 设 $y = e^{f(x)}$，其中 $f(x)$ 具有二阶导数，求 $y''$。**

解：
$y' = e^{f(x)} \cdot f'(x)$
$y'' = e^{f(x)} \cdot (f'(x))^2 + e^{f(x)} \cdot f''(x) = e^{f(x)}((f'(x))^2 + f''(x))$

### 7. 隐函数高阶导数

**(1) $x^2 + y^2 = 1$**

解：
一阶导数：$2x + 2y \cdot y' = 0$，得 $y' = -\frac{x}{y}$
二阶导数：$y'' = -\frac{y - x \cdot y'}{y^2} = -\frac{y - x \cdot (-\frac{x}{y})}{y^2} = -\frac{y^2 + x^2}{y^3} = -\frac{1}{y^3}$

**(2) $e^y + xy = e$**

解：
一阶导数：$e^y \cdot y' + y + x \cdot y' = 0$，得 $y' = -\frac{y}{e^y + x}$
二阶导数：
$y'' = -\frac{(y')(e^y + x) - y(e^y \cdot y' + 1)}{(e^y + x)^2}$
代入 $y' = -\frac{y}{e^y + x}$：
$y'' = -\frac{(-\frac{y}{e^y + x})(e^y + x) - y(e^y \cdot (-\frac{y}{e^y + x}) + 1)}{(e^y + x)^2} = -\frac{-y - y(-\frac{y e^y}{e^y + x} + 1)}{(e^y + x)^2} = -\frac{-y + \frac{y^2 e^y}{e^y + x} - y}{(e^y + x)^2} = -\frac{-2y + \frac{y^2 e^y}{e^y + x}}{(e^y + x)^2} = \frac{2y(e^y + x) - y^2 e^y}{(e^y + x)^3}$

**(3) $y = 1 + x e^y$**

解：
一阶导数：$y' = e^y + x e^y \cdot y'$，得 $y' = \frac{e^y}{1 - x e^y}$
由于 $1 - x e^y = 2 - y$（由原方程 $y - 1 = x e^y$ 得），所以 $y' = \frac{e^y}{2 - y}$
二阶导数：
$y'' = \frac{e^y \cdot y' \cdot (2 - y) + e^y \cdot y'}{(2 - y)^2} = \frac{e^y y'(2 - y + 1)}{(2 - y)^2} = \frac{3 e^y y'}{(2 - y)^2} = \frac{3 e^{2y}}{(2 - y)^3}$

### 8. 参数方程高阶导数

**(1) $\begin{cases} x = \cos t \\ y = \sin t \end{cases}$**

解：
一阶导数：$\frac{dy}{dx} = \frac{\cos t}{-\sin t} = -\cot t$
二阶导数：$\frac{d^2y}{dx^2} = \frac{\csc^2 t}{-\sin t} = -\csc^3 t$

**(2) $\begin{cases} x = t^2 \\ y = 3t - t^3 \end{cases}$**

解：
一阶导数：$\frac{dy}{dx} = \frac{3 - 3t^2}{2t} = \frac{3(1 - t^2)}{2t}$
二阶导数：$\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}(\frac{3(1 - t^2)}{2t})}{2t} = \frac{\frac{3(-2t \cdot 2t - 2(1 - t^2))}{4t^2}}{2t} = \frac{3(-4t^2 - 2 + 2t^2)}{8t^3} = \frac{3(-2t^2 - 2)}{8t^3} = -\frac{3(t^2 + 1)}{4t^3}$

### 9. 相关变化率

**(1) 一个梯子长 10 米，靠在墙上。如果梯子的底部以每秒 1 米的速度远离墙壁，当梯子底部距离墙壁 6 米时，梯子顶部下滑的速度是多少？**

解：设梯子底部距离墙壁的距离为 $x$，顶部距离地面的高度为 $y$，则 $x^2 + y^2 = 10^2 = 100$
两边对 $t$ 求导：$2x \frac{dx}{dt} + 2y \frac{dy}{dt} = 0$，即 $x \frac{dx}{dt} + y \frac{dy}{dt} = 0$
当 $x = 6$ 时，$y = \sqrt{100 - 36} = 8$
已知 $\frac{dx}{dt} = 1$，代入得：$6 \cdot 1 + 8 \cdot \frac{dy}{dt} = 0$，解得 $\frac{dy}{dt} = -\frac{6}{8} = -\frac{3}{4}$
所以梯子顶部下滑的速度是 $\frac{3}{4}$ 米/秒

**(2) 一个球以 40 米/秒的速度垂直向上抛出，当球上升到 30 米高度时，它与地面上一个固定点的距离变化率是多少？**

解：设球的高度为 $h$，与固定点的距离为 $s$，则 $s = \sqrt{h^2 + d^2}$，其中 $d$ 是固定点到抛球点的水平距离（常数）
两边对 $t$ 求导：$\frac{ds}{dt} = \frac{h}{\sqrt{h^2 + d^2}} \cdot \frac{dh}{dt}$
球的运动方程：$h = 40t - 5t^2$，所以 $\frac{dh}{dt} = 40 - 10t$
当 $h = 30$ 时，$30 = 40t - 5t^2$，解得 $t = 2$ 或 $t = 6$（取 $t = 2$，上升阶段）
此时 $\frac{dh}{dt} = 40 - 20 = 20$
所以 $\frac{ds}{dt} = \frac{30}{\sqrt{30^2 + d^2}} \cdot 20$，由于 $d$ 未给出，假设 $d = 0$（固定点在抛球点正下方），则 $\frac{ds}{dt} = 20$ 米/秒

**(3) 一个圆锥形容器，底面半径为 4 米，高为 10 米。如果水以 2 立方米/分钟的速度注入容器，当水深为 5 米时，水面上升的速度是多少？**

解：设水深为 $h$，水面半径为 $r$，由相似三角形得 $\frac{r}{h} = \frac{4}{10}$，即 $r = \frac{2h}{5}$
水的体积 $V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi (\frac{2h}{5})^2 h = \frac{4\pi h^3}{75}$
两边对 $t$ 求导：$\frac{dV}{dt} = \frac{4\pi \cdot 3h^2}{75} \cdot \frac{dh}{dt} = \frac{4\pi h^2}{25} \cdot \frac{dh}{dt}$
已知 $\frac{dV}{dt} = 2$，当 $h = 5$ 时：
$2 = \frac{4\pi \cdot 25}{25} \cdot \frac{dh}{dt} = 4\pi \cdot \frac{dh}{dt}$
解得 $\frac{dh}{dt} = \frac{1}{2\pi}$ 米/分钟

## 三、综合题

### 10. 综合求导问题

**(1) 设 $f(x) = \begin{cases} x^2 \sin\frac{1}{x}, & x \neq 0 \\ 0, & x = 0 \end{cases}$，求 $f'(x)$ 并讨论其连续性。**

解：当 $x \neq 0$ 时，$f'(x) = 2x \sin\frac{1}{x} + x^2 \cos\frac{1}{x} \cdot (-\frac{1}{x^2}) = 2x \sin\frac{1}{x} - \cos\frac{1}{x}$
当 $x = 0$ 时，$f'(0) = \lim_{x \to 0} \frac{f(x) - f(0)}{x} = \lim_{x \to 0} \frac{x^2 \sin\frac{1}{x}}{x} = \lim_{x \to 0} x \sin\frac{1}{x} = 0$
所以 $f'(x) = \begin{cases} 2x \sin\frac{1}{x} - \cos\frac{1}{x}, & x \neq 0 \\ 0, & x = 0 \end{cases}$
讨论连续性：当 $x \to 0$ 时，$2x \sin\frac{1}{x} \to 0$，但 $\cos\frac{1}{x}$ 振荡无极限，所以 $f'(x)$ 在 $x = 0$ 处不连续

**(2) 设 $y = x^{x^x}$，求 $y'$。**

解：令 $u = x^x$，则 $y = x^u$
取对数得 $\ln y = u \ln x = x^x \ln x$
令 $v = x^x$，则 $\ln v = x \ln x$，$\frac{1}{v} \cdot v' = \ln x + 1$，$v' = x^x(\ln x + 1)$
对 $\ln y = v \ln x$ 求导：$\frac{1}{y} \cdot y' = v' \ln x + v \cdot \frac{1}{x}$
代入 $v = x^x$ 和 $v' = x^x(\ln x + 1)$：
$y' = y[x^x(\ln x + 1) \ln x + x^x \cdot \frac{1}{x}] = x^{x^x} x^x[ (\ln x + 1) \ln x + \frac{1}{x} ]$

**(3) 设 $y = \sqrt{x + \sqrt{x + \sqrt{x}}}$，求 $y'$。**

解：令 $u = x + \sqrt{x + \sqrt{x}}$，则 $y = \sqrt{u}$
$y' = \frac{1}{2\sqrt{u}} \cdot u'$
$u' = 1 + \frac{1}{2\sqrt{x + \sqrt{x}}} \cdot (1 + \frac{1}{2\sqrt{x}})$
所以 $y' = \frac{1}{2\sqrt{x + \sqrt{x + \sqrt{x}}}} \cdot [1 + \frac{1 + \frac{1}{2\sqrt{x}}}{2\sqrt{x + \sqrt{x}}}]$

### 11. 证明题

**(1) 证明：若 $f(x)$ 是可导的偶函数，则 $f'(x)$ 是奇函数。**

证：因为 $f(x)$ 是偶函数，所以 $f(-x) = f(x)$
两边对 $x$ 求导：$-f'(-x) = f'(x)$，即 $f'(-x) = -f'(x)$
所以 $f'(x)$ 是奇函数

**(2) 证明：若 $f(x)$ 是可导的奇函数，则 $f'(x)$ 是偶函数。**

证：因为 $f(x)$ 是奇函数，所以 $f(-x) = -f(x)$
两边对 $x$ 求导：$-f'(-x) = -f'(x)$，即 $f'(-x) = f'(x)$
所以 $f'(x)$ 是偶函数

**(3) 证明：若 $f(x)$ 是可导的周期函数，周期为 $T$，则 $f'(x)$ 也是周期函数，周期为 $T$。**

证：因为 $f(x)$ 是周期函数，所以 $f(x + T) = f(x)$
两边对 $x$ 求导：$f'(x + T) = f'(x)$
所以 $f'(x)$ 也是周期函数，周期为 $T$

### 12. 实际应用问题

**(1) 一个球形气球正在膨胀，其体积以每秒 8 立方厘米的速度增加。当半径为 4 厘米时，半径的增长速度是多少？**

解：球的体积 $V = \frac{4}{3}\pi r^3$
两边对 $t$ 求导：$\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$
已知 $\frac{dV}{dt} = 8$，$r = 4$，代入得：
$8 = 4\pi \cdot 16 \cdot \frac{dr}{dt}$
解得 $\frac{dr}{dt} = \frac{8}{64\pi} = \frac{1}{8\pi}$ 厘米/秒

**(2) 一个长方形的长和宽分别以 3 厘米/秒和 2 厘米/秒的速度增加。当长为 10 厘米，宽为 8 厘米时，面积的增长速度是多少？**

解：面积 $A = l \cdot w$
两边对 $t$ 求导：$\frac{dA}{dt} = \frac{dl}{dt} \cdot w + l \cdot \frac{dw}{dt}$
已知 $\frac{dl}{dt} = 3$，$\frac{dw}{dt} = 2$，$l = 10$，$w = 8$，代入得：
$\frac{dA}{dt} = 3 \cdot 8 + 10 \cdot 2 = 24 + 20 = 44$ 平方厘米/秒

**(3) 一个点沿曲线 $y = x^2$ 移动，其 $x$ 坐标以 2 单位/秒的速度增加。当该点经过 $(1, 1)$ 时，其 $y$ 坐标的增长速度是多少？**

解：$y = x^2$
两边对 $t$ 求导：$\frac{dy}{dt} = 2x \cdot \frac{dx}{dt}$
已知 $\frac{dx}{dt} = 2$，当 $x = 1$ 时，代入得：
$\frac{dy}{dt} = 2 \cdot 1 \cdot 2 = 4$ 单位/秒
