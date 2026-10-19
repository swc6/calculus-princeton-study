# 第11周：练习答案

## 无穷区间上的反常积分

### 选择题
1. **答案：A**
   解析：$\int_1^t x^{-3} dx = \left[-\frac{1}{2x^2}\right]_1^t = \frac{1}{2} - \frac{1}{2t^2}$，$t \to \infty$ 时极限为 $\frac{1}{2}$

2. **答案：D**
   解析：$\int_1^t x^{-1/2} dx = 2\sqrt{t} - 2 \to \infty$（$t \to \infty$），发散；也可由 p-积分结论 $p = \frac{1}{2} \leq 1$ 直接得发散

3. **答案：B**
   解析：$\int_0^t e^{-2x} dx = \frac{1}{2}(1 - e^{-2t}) \to \frac{1}{2}$（$t \to \infty$）

### 填空题
1. **答案：$1$**
   解析：令 $u = \ln x$，$du = \frac{1}{x}dx$，积分化为 $\int_1^\infty \frac{1}{u^2} du = \left[-\frac{1}{u}\right]_1^\infty = 1$；也可直接看出 $\left[-\frac{1}{\ln x}\right]_e^\infty = 0 - (-1) = 1$

2. **答案：$\frac{1}{2}$**
   解析：$\int_0^t x e^{-x^2} dx = \left[-\frac{1}{2}e^{-x^2}\right]_0^t = \frac{1}{2}(1 - e^{-t^2}) \to \frac{1}{2}$

3. **答案：$\pi$**
   解析：$x^2 + 2x + 2 = (x + 1)^2 + 1$，$\int \frac{dx}{(x+1)^2 + 1} = \arctan(x + 1)$，故原积分 $= \lim_{t \to \infty}\arctan(t + 1) - \lim_{t \to -\infty}\arctan(t + 1) = \frac{\pi}{2} - \left(-\frac{\pi}{2}\right) = \pi$

### 解答题
1. **解**：$\int_1^t \left(\frac{2}{x^2} + \frac{3}{x^3}\right) dx = \left[-\frac{2}{x} - \frac{3}{2x^2}\right]_1^t$，当 $t \to \infty$ 时上式趋于 $0 - \left(-2 - \frac{3}{2}\right) = \frac{7}{2}$，故积分收敛，值为 $\frac{7}{2}$

2. **解**：$\int_1^t \frac{1}{x + 1} dx = \ln(t + 1) - \ln 2 \to \infty$（$t \to \infty$），故发散；也可用极限比较：$\lim_{x \to \infty} \frac{1/(x+1)}{1/x} = 1$，与 $p = 1$ 的 p-积分同敛散，故发散

3. **解**：$x^2 + 2x + 5 = (x + 1)^2 + 4$，$\int_1^t \frac{dx}{(x+1)^2 + 4} = \frac{1}{2}\left[\arctan\frac{x + 1}{2}\right]_1^t$，$t \to \infty$ 时趋于 $\frac{1}{2}\left(\frac{\pi}{2} - \arctan 1\right) = \frac{1}{2}\left(\frac{\pi}{2} - \frac{\pi}{4}\right) = \frac{\pi}{8}$，故收敛于 $\frac{\pi}{8}$

4. **解**：分部积分：$\int_0^t xe^{-x} dx = \left[-xe^{-x}\right]_0^t + \int_0^t e^{-x} dx = -te^{-t} + (1 - e^{-t})$。当 $t \to \infty$ 时 $te^{-t} \to 0$，$e^{-t} \to 0$，故积分收敛于 $1$

5. **解**：$\int e^{-x}\cos x\, dx = \frac{e^{-x}}{2}(\sin x - \cos x)$（可求导验证）。于是
   $$\int_0^\infty e^{-x}\cos x\, dx = \lim_{t \to \infty} \frac{e^{-t}}{2}(\sin t - \cos t) - \frac{1}{2}(0 - 1) = 0 + \frac{1}{2} = \frac{1}{2}$$
   （第一项中 $\sin t - \cos t$ 有界而 $e^{-t} \to 0$）

6. **解**：当 $x \geq 1$ 时 $0 \leq \frac{\sin^2 x}{x^2} \leq \frac{1}{x^2}$，而 $\int_1^\infty \frac{1}{x^2} dx$ 收敛（$p = 2 > 1$），由比较判别法，原积分收敛

## 无界函数的反常积分

### 选择题
1. **答案：A**
   解析：瑕点 $x = 0$，$q = \frac{1}{3} < 1$ 应收敛：$\int_t^1 x^{-1/3} dx = \frac{3}{2}\left(1 - t^{2/3}\right) \to \frac{3}{2}$（$t \to 0^+$）

2. **答案：D**
   解析：$q = \frac{4}{3} \geq 1$，由 q-积分结论发散；直接计算 $\int_t^1 x^{-4/3} dx = 3\left(t^{-1/3} - 1\right) \to \infty$

3. **答案：B**
   解析：$\int_t^1 \ln x\, dx = \left[x\ln x - x\right]_t^1 = -1 - t\ln t + t$，$\lim_{t \to 0^+} t\ln t = 0$，故积分收敛于 $-1$

### 填空题
1. **答案：$2$**
   解析：$\int_0^1 (1 - x)^{-1/2} dx$，原函数 $-2\sqrt{1 - x}$，$\left[-2\sqrt{1 - x}\right]_0^1 = 0 - (-2) = 2$（$x = 1$ 为瑕点，取极限即得）

2. **答案：$1$**
   解析：$x = 1$ 为瑕点，原函数 $-\sqrt{1 - x^2}$，$\lim_{t \to 1^-}\left[-\sqrt{1 - t^2}\right] - (-1) = 0 + 1 = 1$

3. **答案：发散**
   解析：$x = 1$ 为瑕点，$\int_t^1 \frac{dx}{x\ln x} = \left[\ln|\ln x|\right]_t^1 = 0 - \ln(-\ln t) \to +\infty$（$t \to 1^+$ 时 $\ln t \to 0^-$，$-\ln t \to 0^+$，$\ln(-\ln t) \to -\infty$），故发散

### 解答题
1. **解**：$x = 0$ 为瑕点。令 $t = \sqrt{x}$，则 $x = t^2$，$dx = 2t\, dt$，当 $x: 0 \to 1$ 时 $t: 0 \to 1$：
   $$\int_{s}^{1} \frac{dx}{\sqrt{x}(1 + x)} = \int_{\sqrt{s}}^{1} \frac{2t\, dt}{t(1 + t^2)} = 2\left[\arctan t\right]_{\sqrt{s}}^{1}$$
   令 $s \to 0^+$，得 $2\left(\frac{\pi}{4} - 0\right) = \frac{\pi}{2}$，故积分收敛于 $\frac{\pi}{2}$

2. **解**：$x = 3$ 为瑕点。原函数为 $\arcsin\frac{x}{3}$：
   $$\int_0^3 \frac{dx}{\sqrt{9 - x^2}} = \lim_{t \to 3^-}\left[\arcsin\frac{x}{3}\right]_0^t = \arcsin 1 - 0 = \frac{\pi}{2}$$
   故积分收敛于 $\frac{\pi}{2}$

3. **解**：$x^2 - 3x + 2 = (x - 1)(x - 2)$，$x = 1$ 是区间 $[0, 1]$ 的瑕点。分解 $\frac{1}{(x-1)(x-2)} = -\frac{1}{x - 1} + \frac{1}{x - 2}$，则
   $$\int_0^t \frac{dx}{x^2 - 3x + 2} = \left[\ln\left|\frac{x - 2}{x - 1}\right|\right]_0^t = \ln\left|\frac{t - 2}{t - 1}\right| - \ln 2$$
   当 $t \to 1^-$ 时 $\left|\frac{t - 2}{t - 1}\right| \to +\infty$，故积分发散（瑕点附近被积函数与 $\frac{1}{1 - x}$ 同阶，$q = 1$）

4. **解**：$x = 0$ 为瑕点。由 $\lim_{x \to 0^+} \frac{e^x - 1}{x} = 1$ 得 $\frac{1}{e^x - 1}$ 与 $\frac{1}{x}$ 是等价无穷小，即 $\lim_{x \to 0^+} \frac{1/(e^x - 1)}{1/x} = 1$，而 $\int_0^1 \frac{1}{x} dx$ 发散（$q = 1$），由极限比较判别法，原积分发散

5. **解**：$x = 0$ 与 $x = 1$ 都是瑕点。令 $x = \sin^2 t$（$t \in (0, \frac{\pi}{2})$），则 $dx = 2\sin t\cos t\, dt$，$\sqrt{x(1 - x)} = \sin t\cos t$，于是
   $$\int_{\epsilon}^{1 - \delta} \frac{dx}{\sqrt{x(1 - x)}} = \int_{\arcsin\sqrt{\epsilon}}^{\arcsin\sqrt{1 - \delta}} 2\, dt$$
   令 $\epsilon \to 0^+$、$\delta \to 0^+$，得 $\int_0^{\pi/2} 2\, dt = \pi$，故积分收敛于 $\pi$

6. **解**：$x = 0$ 为瑕点。分部积分：$\int_t^1 x\ln x\, dx = \left[\frac{x^2}{2}\ln x - \frac{x^2}{4}\right]_t^1 = -\frac{1}{4} - \frac{t^2}{2}\ln t + \frac{t^2}{4}$。
   $\lim_{t \to 0^+} t^2 \ln t = 0$，故积分收敛于 $-\frac{1}{4}$

## p-积分、q-积分与比较判别法

### 选择题
1. **答案：A**
   解析：$\int_1^t x^{-p} dx = \frac{t^{1-p} - 1}{1 - p}$（$p \neq 1$），$t \to \infty$ 时 $t^{1-p} \to 0$ 当且仅当 $p > 1$；$p = 1$ 时积分等于 $\ln t \to \infty$ 发散

2. **答案：C**
   解析：$\int_t^1 x^{-q} dx = \frac{1 - t^{1-q}}{1 - q}$（$q \neq 1$），$t \to 0^+$ 时 $t^{1-q} \to 0$ 当且仅当 $q < 1$；$q = 1$ 时积分等于 $-\ln t \to \infty$ 发散

3. **答案：C**
   解析：A 中 $p = \frac{1}{2} \leq 1$ 发散；B 中 $p = 1$ 发散；C 中 $p = \frac{3}{2} > 1$ 收敛；D 中 $p = \frac{2}{3} \leq 1$ 发散

### 填空题
1. **答案：$\frac{1}{p - 1}$**
   解析：$\int_1^t x^{-p} dx = \left[\frac{x^{1-p}}{1 - p}\right]_1^t = \frac{t^{1-p} - 1}{1 - p}$，$p > 1$ 时 $t \to \infty$ 得 $\frac{0 - 1}{1 - p} = \frac{1}{p - 1}$

2. **答案：$\frac{3}{2}$**
   解析：$p = \frac{5}{3} > 1$，值为 $\frac{1}{p - 1} = \frac{1}{2/3} = \frac{3}{2}$；直接计算：$\left[-\frac{3}{2}x^{-2/3}\right]_1^\infty = 0 - \left(-\frac{3}{2}\right) = \frac{3}{2}$

3. **答案：$\frac{1}{2}\ln 3$**
   解析：$\frac{1}{x^2 - 1} = \frac{1}{2}\left(\frac{1}{x - 1} - \frac{1}{x + 1}\right)$，原函数为 $\frac{1}{2}\ln\left|\frac{x - 1}{x + 1}\right|$。$x \to \infty$ 时趋于 $\frac{1}{2}\ln 1 = 0$，$x = 2$ 处值为 $\frac{1}{2}\ln\frac{1}{3} = -\frac{1}{2}\ln 3$，故积分 $= 0 - \left(-\frac{1}{2}\ln 3\right) = \frac{1}{2}\ln 3$

### 解答题
1. **解**：当 $x \geq 1$ 时 $x^3 + x \geq x^3 > 0$，故 $0 \leq \frac{1}{x^3 + x} \leq \frac{1}{x^3}$。而 $\int_1^\infty \frac{1}{x^3} dx$ 收敛（$p = 3 > 1$），由比较判别法，原积分收敛

2. **解**：当 $x \geq 1$ 时 $\sin x \geq -1$，故 $x + \sin x \leq x + 1 \leq 2x$，于是 $\frac{1}{x + \sin x} \geq \frac{1}{2x} > 0$。而 $\int_1^\infty \frac{1}{2x} dx$ 发散（$p = 1$），由比较判别法，原积分发散

3. **解**：与 $g(x) = \frac{1}{x^{3/2}}$ 比较：
   $$\lim_{x \to \infty} \frac{\sqrt{x}/(1 + x^2)}{1/x^{3/2}} = \lim_{x \to \infty} \frac{x^2}{1 + x^2} = 1$$
   极限为正有限数，故与 $\int_1^\infty \frac{1}{x^{3/2}} dx$ 同敛散；$p = \frac{3}{2} > 1$ 收敛，故原积分收敛

4. **解**：$x = 0$ 为瑕点。$x \to 0^+$ 时 $\sqrt{x^2 + x} \sim \sqrt{x}$，故
   $$\lim_{x \to 0^+} \frac{1/\sqrt{x^2 + x}}{1/\sqrt{x}} = \lim_{x \to 0^+} \frac{\sqrt{x}}{\sqrt{x^2 + x}} = \lim_{x \to 0^+} \frac{1}{\sqrt{x + 1}} = 1$$
   极限为正有限数，而 $\int_0^1 \frac{1}{\sqrt{x}} dx$ 收敛（$q = \frac{1}{2} < 1$），故原积分收敛

5. **解**：当 $x > 1$ 时 $\ln x < x$，故 $0 < \frac{1}{\ln x} > \frac{1}{x}$（即 $\frac{1}{\ln x} \geq \frac{1}{x}$ 在 $x \geq 2$ 上成立）。而 $\int_2^\infty \frac{1}{x} dx$ 发散，由比较判别法，原积分发散

6. **解**：当 $x \to \infty$ 时 $\frac{x^2}{x^4 + x^2 + 1} \sim \frac{1}{x^2}$：
   $$\lim_{x \to \infty} \frac{x^2/(x^4 + x^2 + 1)}{1/x^2} = \lim_{x \to \infty} \frac{x^4}{x^4 + x^2 + 1} = 1$$
   而 $\int_1^\infty \frac{1}{x^2} dx$ 收敛，故 $\int_1^\infty$ 部分收敛；在 $[0, 1]$ 上被积函数 $\frac{x^2}{x^4 + x^2 + 1}$ 连续（分母恒正），为常义积分。故原积分收敛

## 综合应用题

1. **解**：在 $[0, 1]$ 上 $e^{-x^2}$ 连续，是常义积分。当 $x \geq 1$ 时 $x^2 \geq x$，故 $0 \leq e^{-x^2} \leq e^{-x}$，而
   $$\int_1^\infty e^{-x} dx = \left[-e^{-x}\right]_1^\infty = e^{-1}$$
   收敛，由比较判别法，$\int_1^\infty e^{-x^2} dx$ 收敛，从而 $\int_0^\infty e^{-x^2} dx$ 收敛

2. **解**：体积（圆盘法）：
   $$V = \pi \int_1^\infty \left(\frac{1}{x}\right)^2 dx = \pi \left[-\frac{1}{x}\right]_1^\infty = \pi$$
   侧面积：
   $$S = 2\pi \int_1^\infty \frac{1}{x}\sqrt{1 + \frac{1}{x^4}}\, dx \geq 2\pi \int_1^\infty \frac{1}{x}\, dx = 2\pi\left[\ln x\right]_1^\infty = \infty$$
   故表面积发散。
   讨论：并不矛盾。"体积有限、表面积无限"是数学上自洽的事实；"填满它需要有限体积的油漆，但刷它的内表面需要无限多的油漆"这一悖论的根源在于现实油漆有厚度，而数学表面没有厚度——有限的油漆体积恰好可以被无限延展且越来越薄的涂层覆盖。

3. **解**：分部积分：令 $u = \arctan x$，$dv = \frac{dx}{x^2}$，则 $du = \frac{dx}{1 + x^2}$，$v = -\frac{1}{x}$：
   $$\int_1^t \frac{\arctan x}{x^2} dx = \left[-\frac{\arctan x}{x}\right]_1^t + \int_1^t \frac{1}{x(1 + x^2)} dx$$
   $t \to \infty$ 时第一项趋于 $0 + \frac{\pi}{4} = \frac{\pi}{4}$（因为 $\frac{\arctan t}{t} \to 0$）。
   对第二个积分作部分分式分解：$\frac{1}{x(1 + x^2)} = \frac{1}{x} - \frac{x}{1 + x^2}$，故
   $$\int_1^t \frac{dx}{x(1 + x^2)} = \left[\ln x - \frac{1}{2}\ln(1 + x^2)\right]_1^t = \ln\frac{t}{\sqrt{1 + t^2}} + \frac{1}{2}\ln 2 \to \frac{1}{2}\ln 2$$
   所以原积分收敛，值为 $\frac{\pi}{4} + \frac{\ln 2}{2}$

4. **解**：在 $x \to 0^+$ 附近：$\frac{1}{1 + x^p} \to 1$，被积函数有界，$0$ 附近不产生反常性（对任意 $p > 0$）。在 $x \to \infty$ 附近：$\frac{1}{1 + x^p} \sim \frac{1}{x^p}$，且 $\lim_{x \to \infty} \frac{1/(1 + x^p)}{1/x^p} = 1$，由极限比较判别法，其敛散性与 $\int_1^\infty \frac{1}{x^p} dx$ 相同。故当且仅当 $p > 1$ 时 $\int_0^\infty \frac{1}{1 + x^p} dx$ 收敛

5. **解**：令 $u = \ln x$，$du = \frac{dx}{x}$，当 $x: e \to \infty$ 时 $u: 1 \to \infty$，积分化为 $\int_1^\infty \frac{1}{u^k} du$。这是 p-积分（$p = k$），故当且仅当 $k > 1$ 时收敛。
   当 $k = 2$ 时：$\int_1^\infty \frac{1}{u^2} du = \left[-\frac{1}{u}\right]_1^\infty = 1$，即原积分值为 $1$

6. **解**：拆分：$\int_{-\infty}^{\infty} \frac{x^3}{1 + x^6} dx = \int_{-\infty}^0 \frac{x^3}{1 + x^6} dx + \int_0^\infty \frac{x^3}{1 + x^6} dx$。
   $x \to \infty$ 时 $\frac{x^3}{1 + x^6} \sim \frac{1}{x^3}$（$p = 3 > 1$），故右半积分收敛；左半积分由对称性（或同样比较）也收敛。
   两半都收敛，且被积函数为奇函数，故
   $$\int_{-\infty}^{\infty} \frac{x^3}{1 + x^6} dx = -\int_0^\infty \frac{x^3}{1 + x^6} dx + \int_0^\infty \frac{x^3}{1 + x^6} dx = 0$$
   注意：与 $\int_{-\infty}^{\infty} \frac{x}{1 + x^2} dx$ 不同，这里两半分别收敛，故奇函数"抵消为 0"是合法的

7. **解**：$x = 1$ 为瑕点。$x \to 1^+$ 时 $x\sqrt{x^2 - 1} \sim \sqrt{2(x - 1)}$，被积函数与 $\frac{1}{\sqrt{x - 1}}$ 同阶（$q = \frac{1}{2} < 1$）；$x \to \infty$ 时被积函数 $\sim \frac{1}{x^2}$（$p = 2 > 1$）。两端均收敛，故原积分收敛。
   求值：令 $x = \sec\theta$（$\theta \in [0, \frac{\pi}{2})$），则 $dx = \sec\theta\tan\theta\, d\theta$，$\sqrt{x^2 - 1} = \tan\theta$，于是
   $$\frac{dx}{x\sqrt{x^2 - 1}} = \frac{\sec\theta\tan\theta\, d\theta}{\sec\theta\tan\theta} = d\theta$$
   当 $x: 1 \to \infty$ 时 $\theta: 0 \to \frac{\pi}{2}$，故
   $$\int_1^\infty \frac{dx}{x\sqrt{x^2 - 1}} = \int_0^{\pi/2} d\theta = \frac{\pi}{2}$$

8. **解**：面积：
   $$A = \int_0^\infty e^{-x} dx = \left[-e^{-x}\right]_0^\infty = 0 - (-1) = 1$$
   体积（圆盘法）：
   $$V = \pi \int_0^\infty \left(e^{-x}\right)^2 dx = \pi \int_0^\infty e^{-2x} dx = \pi \left[-\frac{1}{2}e^{-2x}\right]_0^\infty = \frac{\pi}{2}$$
   即无界区域面积为 $1$，旋转体体积为 $\frac{\pi}{2}$
