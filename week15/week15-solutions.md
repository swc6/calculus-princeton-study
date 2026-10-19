# 第15周：练习答案

## 多元函数的定义域、极限与连续

### 选择题
1. **答案：A**
   解析：$\frac{1}{\sqrt{x}}$ 要求 $x > 0$（分母不能为零），$\ln(x+y)$ 要求 $x + y > 0$，两者需同时成立

2. **答案：C**
   解析：沿 $y = kx$：$\frac{kx^2}{x^2+k^2x^2} = \frac{k}{1+k^2}$，极限随 $k$ 变化（$k=0$ 时为 $0$，$k=1$ 时为 $\frac{1}{2}$），故极限不存在

3. **答案：B**
   解析：令 $u = x^2 + y^2 \to 0^+$，$\frac{\sin(x^2+y^2)}{x^2+y^2} = \frac{\sin u}{u} \to 1$

### 填空题
1. **答案：$\{(x,y) \mid 1 < x^2 + y^2 \leq 4\}$**
   解析：$\sqrt{4-x^2-y^2}$ 要求 $x^2+y^2 \leq 4$；$\ln(x^2+y^2-1)$ 要求 $x^2+y^2 > 1$

2. **答案：$2$**
   解析：分子分母同乘共轭：$\frac{(x^2+y^2)\left(\sqrt{x^2+y^2+1}+1\right)}{x^2+y^2+1-1} = \sqrt{x^2+y^2+1}+1 \to 1 + 1 = 2$

3. **答案：$3$**
   解析：$\frac{\sin(xy)}{x} = \frac{\sin(xy)}{xy}\cdot y \to 1 \times 3 = 3$（$x \to 0$ 时 $xy \to 0$）

### 解答题
1. **解**：$\arcsin\frac{x}{2}$ 要求 $\left|\frac{x}{2}\right| \leq 1$，即 $-2 \leq x \leq 2$；$\sqrt{y-x^2}$ 要求 $y \geq x^2$。
   定义域为 $\{(x,y) \mid -2 \leq x \leq 2,\ y \geq x^2\}$

2. **解**：由 $x^2 \leq x^2 + y^2$，得
   $$\left|\frac{x^2y}{x^2+y^2}\right| \leq \frac{(x^2+y^2)|y|}{x^2+y^2} = |y|$$
   当 $(x,y) \to (0,0)$ 时 $|y| \to 0$，由夹逼准则，$\lim_{(x,y)\to(0,0)} \frac{x^2y}{x^2+y^2} = 0$

3. **解**：沿 $y = 0$：$\frac{x}{x} = 1 \to 1$；沿 $y = 2x$：$\frac{3x}{-x} = -3 \to -3$。
   两条路径极限不同，故极限不存在

4. **解**：沿 $y = kx$（$k \neq 0$）：
   $$\frac{x^2 \cdot k^2x^2}{x^4 + k^4x^4} = \frac{k^2}{1+k^4}$$
   极限值随 $k$ 变化（$k = 1$ 时为 $\frac{1}{2}$，$k = 2$ 时为 $\frac{4}{17}$），故极限不存在

5. **解**：令 $u = x^2 + y^2 \to 0^+$，由 $\lim_{u\to0}\frac{1-\cos u}{u^2} = \frac{1}{2}$：
   $$\lim_{(x,y)\to(0,0)} \frac{1-\cos(x^2+y^2)}{(x^2+y^2)^2} = \lim_{u\to0^+} \frac{1-\cos u}{u^2} = \frac{1}{2}$$

6. **解**：当 $(x,y) \neq (0,0)$ 时，
   $$\left|\frac{x^3}{x^2+y^2}\right| \leq \frac{x^2|x|}{x^2+y^2} \leq |x| \to 0$$
   故 $\lim_{(x,y)\to(0,0)} f(x,y) = 0 = f(0,0)$，$f$ 在 $(0,0)$ 处连续

## 偏导数与全微分

### 选择题
1. **答案：A**
   解析：对 $x$ 求偏导时把 $y$ 视为常数：$z_x = 3x^2y^2$

2. **答案：C**
   解析：可微必可推出偏导数存在；但偏导数存在不能保证可微（甚至不保证连续），故为必要非充分条件

3. **答案：A**
   解析：$z_x = ye^{xy}$，$z_y = xe^{xy}$，在 $(1,1)$ 处均为 $e$，故 $dz = e\,dx + e\,dy$

### 填空题
1. **答案：$z_y = x^2\cos y$，$z_{xy} = 2x\cos y$**
   解析：先对 $y$ 求偏导得 $x^2\cos y$，再对 $x$ 求偏导得 $2x\cos y$

2. **答案：$(xy)^z\ln(xy)$**
   解析：对 $z$ 求偏导时底数 $(xy)$ 视为常数，属于指数函数求导

3. **答案：$2$**
   解析：$z_x = \frac{2x}{x^2+y^2}$，$z_y = \frac{2y}{x^2+y^2}$；在 $(1,1)$ 处 $z_x = z_y = 1$，和为 $2$

### 解答题
1. **解**：$z_x = 2xy - \frac{y}{x^2}$，$z_y = x^2 + \frac{1}{x}$。
   在 $(1,2)$ 处：$z_x = 2 \times 1 \times 2 - 2 = 2$，$z_y = 1 + 1 = 2$

2. **解**：
   $$f_x = -e^{-x}\sin 2y, \qquad f_y = 2e^{-x}\cos 2y$$
   $$f_{xx} = e^{-x}\sin 2y, \qquad f_{xy} = -2e^{-x}\cos 2y, \qquad f_{yy} = -4e^{-x}\sin 2y$$

3. **解**：$z = \frac{1}{2}\ln(x^2+y^2)$，$z_x = \frac{x}{x^2+y^2}$，$z_{xx} = \frac{(x^2+y^2) - x\cdot 2x}{(x^2+y^2)^2} = \frac{y^2 - x^2}{(x^2+y^2)^2}$。
   由对称性 $z_{yy} = \frac{x^2 - y^2}{(x^2+y^2)^2}$，故 $z_{xx} + z_{yy} = 0$ ✓

4. **解**：$z_x = yx^{y-1}$，$z_y = x^y\ln x$，故
   $$dz = yx^{y-1}\,dx + x^y\ln x\,dy$$

5. **解**：取 $f(x,y) = \sin x\cos y$，$(x_0,y_0) = \left(\frac{\pi}{6}, \frac{\pi}{4}\right)$，$\Delta x = \Delta y = -\frac{\pi}{180} \approx -0.01745$。
   $f(x_0,y_0) = \frac{1}{2}\cdot\frac{\sqrt{2}}{2} \approx 0.35355$；
   $f_x = \cos x\cos y\big|_{(x_0,y_0)} = \frac{\sqrt{3}}{2}\cdot\frac{\sqrt{2}}{2} \approx 0.61237$；
   $f_y = -\sin x\sin y\big|_{(x_0,y_0)} = -\frac{1}{2}\cdot\frac{\sqrt{2}}{2} \approx -0.35355$。
   $$f \approx 0.35355 + 0.61237\times(-0.01745) + (-0.35355)\times(-0.01745) \approx 0.35355 - 0.01069 + 0.00617 = 0.34903 \approx 0.349$$

6. **解**：$f_x(0,0) = \lim_{\Delta x\to0}\frac{f(\Delta x,0)-f(0,0)}{\Delta x} = \lim\frac{0}{\Delta x} = 0$，同理 $f_y(0,0) = 0$。
   考察
   $$\frac{\Delta f - 0 - 0}{\rho} = \frac{\Delta x\,\Delta y}{\sqrt{\Delta x^2+\Delta y^2}}\cdot\frac{1}{\sqrt{\Delta x^2+\Delta y^2}} = \frac{\Delta x\,\Delta y}{\Delta x^2+\Delta y^2}$$
   取 $\Delta y = \Delta x \to 0^+$：比值为 $\frac{(\Delta x)^2}{2(\Delta x)^2} = \frac{1}{2} \neq 0$，故差不是 $o(\rho)$，$f$ 在 $(0,0)$ 处不可微

## 复合函数与隐函数求导

### 选择题
1. **答案：D**
   解析：$z_x = \frac{\partial z}{\partial u}u_x + \frac{\partial z}{\partial v}v_x = 2uv + u^2$

2. **答案：A**
   解析：$z_x = 2xf'$，$z_y = 2yf'$，$yz_x - xz_y = 2xyf' - 2xyf' = 0$

3. **答案：A**
   解析：记 $s = x+y+z$，方程为 $s = e^{-s}$，只含 $s$，故 $s$ 为常数 $s_0$（满足 $s_0 = e^{-s_0}$）。
   于是 $z = s_0 - x - y$，$z_x = z_y = -1$，$z_x + z_y = -2$

### 填空题
1. **答案：$e^{\sin t - 2t^2}(\cos t - 4t)$**
   解析：$\frac{dz}{dt} = e^{u-2v}(u' - 2v') = e^{\sin t - 2t^2}(\cos t - 4t)$

2. **答案：$2f_1 + yf_2$**
   解析：$z_x = f_1\cdot 2 + f_2\cdot y$

3. **答案：$\dfrac{z}{x+z}$**
   解析：$F = \frac{x}{z} - \ln z + \ln y$，$F_x = \frac{1}{z}$，$F_z = -\frac{x}{z^2} - \frac{1}{z} = -\frac{x+z}{z^2}$，
   $z_x = -\frac{F_x}{F_z} = \frac{z}{x+z}$

### 解答题
1. **解**：$\frac{dz}{dt} = v\cdot e^t + u\cdot(-\sin t) + \cos t = e^t\cos t - e^t\sin t + \cos t$

2. **解**：$z_x = 2x f_1 + y e^{xy} f_2$，$z_y = -2y f_1 + x e^{xy} f_2$

3. **解**：$z_x = f_1 + y f_2$。再对 $y$ 求导（$f_1$、$f_2$ 的自变量为 $(x, xy)$，对 $y$ 的导数为 $x$）：
   $$z_{xy} = f_{12}\cdot x + f_2 + y\cdot f_{22}\cdot x = x f_{12} + f_2 + xy f_{22}$$

4. **解**：$F = xz - \ln(yz) = xz - \ln y - \ln z$。
   $F_x = z$，$F_z = x - \frac{1}{z}$，$F_y = -\frac{1}{y}$。
   $$z_x = -\frac{z}{x - 1/z} = \frac{z^2}{1 - xz}, \qquad z_y = -\frac{-1/y}{x - 1/z} = \frac{z}{y(xz-1)}$$

5. **解**：$z_x = f'(u)\cdot 2x = 2xf'$，$z_y = f'(u)\cdot 2y = 2yf'$。
   $y z_x - x z_y = 2xyf' - 2xyf' = 0$ ✓

6. **解**：记 $u = x-y$，$v = y-z$，$w = z-x$。
   $F_x = F_u - F_w$，$F_y = -F_u + F_v$，$F_z = -F_v + F_w$。
   $$z_x = -\frac{F_u - F_w}{-F_v + F_w} = \frac{F_w - F_u}{F_w - F_v}, \qquad z_y = -\frac{-F_u + F_v}{F_w - F_v} = \frac{F_u - F_v}{F_w - F_v}$$
   $$z_x + z_y = \frac{(F_w - F_u) + (F_u - F_v)}{F_w - F_v} = \frac{F_w - F_v}{F_w - F_v} = 1$$

## 综合应用题

1. **解**：$z_x = \frac{-y/x^2}{1 + y^2/x^2} = \frac{-y}{x^2+y^2}$，$z_{xx} = \frac{2xy}{(x^2+y^2)^2}$；
   $z_y = \frac{1/x}{1+y^2/x^2} = \frac{x}{x^2+y^2}$，$z_{yy} = \frac{-2xy}{(x^2+y^2)^2}$。
   故 $z_{xx} + z_{yy} = 0$ ✓

2. **解**：$u = x+y$，$v = x-y$。$z_x = f_1 + f_2$，$z_y = f_1 - f_2$。
   $z_{xx} = f_{11} + f_{12} + f_{21} + f_{22} = f_{11} + 2f_{12} + f_{22}$；
   $z_{yy} = f_{11} - f_{12} - f_{21} + f_{22} = f_{11} - 2f_{12} + f_{22}$。
   故 $z_{xx} + z_{yy} = 2(f_{11} + f_{22})$

3. **解**：记 $r = \sqrt{x^2+y^2+z^2}$，$u = \frac{1}{r}$。$\frac{\partial u}{\partial x} = -\frac{1}{r^2}\cdot\frac{x}{r} = -\frac{x}{r^3}$。
   $$u_{xx} = -\frac{1}{r^3} + \frac{3x}{r^4}\cdot\frac{x}{r} = -\frac{1}{r^3} + \frac{3x^2}{r^5}$$
   由对称性，$u_{xx}+u_{yy}+u_{zz} = -\frac{3}{r^3} + \frac{3(x^2+y^2+z^2)}{r^5} = -\frac{3}{r^3} + \frac{3r^2}{r^5} = 0$ ✓

4. **解**：$z_r = z_x\cos\theta + z_y\sin\theta$；$z_\theta = -r z_x\sin\theta + r z_y\cos\theta$，故 $\frac{1}{r^2}z_\theta^2 = (-z_x\sin\theta + z_y\cos\theta)^2$。
   $$z_r^2 + \frac{1}{r^2}z_\theta^2 = (z_x\cos\theta + z_y\sin\theta)^2 + (z_y\cos\theta - z_x\sin\theta)^2 = z_x^2(\cos^2\theta+\sin^2\theta) + z_y^2(\sin^2\theta+\cos^2\theta) = z_x^2 + z_y^2$$
   （交叉项相消）

5. **解**：取 $f(x,y) = x^y$，$(x_0,y_0) = (2,1)$，$\Delta x = -0.03$，$\Delta y = 0.05$。
   $f(2,1) = 2$；$f_x = yx^{y-1}\big|_{(2,1)} = 1$；$f_y = x^y\ln x\big|_{(2,1)} = 2\ln 2 \approx 1.3863$。
   $$f \approx 2 + 1\times(-0.03) + 1.3863\times0.05 = 2 - 0.03 + 0.0693 = 2.0393$$
   （精确值 $1.97^{1.05} \approx 2.0378$，近似效果良好）

6. **解**：由隐函数求导公式：
   $$\frac{\partial x}{\partial y} = -\frac{F_y}{F_x}, \qquad \frac{\partial y}{\partial z} = -\frac{F_z}{F_y}, \qquad \frac{\partial z}{\partial x} = -\frac{F_x}{F_z}$$
   三式相乘：
   $$\frac{\partial x}{\partial y}\cdot\frac{\partial y}{\partial z}\cdot\frac{\partial z}{\partial x} = \left(-\frac{F_y}{F_x}\right)\left(-\frac{F_z}{F_y}\right)\left(-\frac{F_x}{F_z}\right) = -1$$
   （三个负号中留下一个）

7. **解**：记 $f$ 的三个中间变量为 $p_1 = x$，$p_2 = xy$，$p_3 = xyz$。
   $$\frac{\partial u}{\partial y} = f_2\cdot x + f_3\cdot xz = x f_2 + xz f_3$$
   再对 $z$ 求导（$f_2$、$f_3$ 对第三个中间变量 $p_3 = xyz$ 的导数分别为 $f_{23}\cdot xy$、$f_{33}\cdot xy$）：
   $$\frac{\partial^2 u}{\partial y\,\partial z} = x\cdot xy\, f_{23} + x f_3 + xz\cdot xy\, f_{33} = x^2 y f_{23} + x f_3 + x^2 yz f_{33}$$

8. **解**：$dV = 2\pi rh\,dr + \pi r^2\,dh$。代入 $r = 10$，$h = 20$，$dr = 0.1$，$dh = -0.2$：
   $$dV = 2\pi\times10\times20\times0.1 + \pi\times100\times(-0.2) = 40\pi - 20\pi = 20\pi \approx 62.83\ \text{cm}^3$$
   精确值：$V_1 - V_0 = \pi(10.1)^2(19.8) - \pi\cdot10^2\cdot20 = 2019.798\pi - 2000\pi = 19.798\pi \approx 62.20\ \text{cm}^3$。
   全微分估计 $62.83\ \text{cm}^3$ 与精确值 $62.20\ \text{cm}^3$ 相差约 $0.63\ \text{cm}^3$（偏差约 $1\%$）
