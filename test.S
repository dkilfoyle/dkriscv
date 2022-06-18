
.text

.globl main
main:
  addi sp, sp, -8                         # Make space for start of AR
  sw s0, 0(sp)                            # Save caller's FP
  sw ra, 4(sp)                            # Save caller's RA
  addi s0, sp, 8                          # New FP is at old SP
                                          # main body
                                          # no locals to reserve stack for
  addi sp, sp, -4                         # reserve stack space for 1 locals i
  li a0, 0                                # Load constant 0 to a0
  sw a0, -12(s0)                          # push local var i to stack and init value
whiletest1:
  lw a0, -12(s0)                          # retrieve func param i
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result of i) onto stack as LHSTemp3 -16
  li a0, 10                               # Load constant 10 to a0
  lw t1, -16(s0)                          # t1 = saved LHS (LHSTemp3)
  slt a0, t1, a0                          # a0 = t1 < a0 (i < 10)
  addi sp, sp, 4                          # pop lhs temporary LHSTemp3 off stack
  beqz a0, exitwhile2                     # if not true exit loop
                                          # no locals to reserve stack for
                                          # no locals to reserve stack for
                                          # call fib(i)
  lw a0, -12(s0)                          # retrieve func param i
  addi sp, sp, -4
  sw a0, 0(sp)                            # save function param 0:n to stack
  jal fib
  mv a1, a0                               # Move A0 to A1 to be argument for print_int ecall
  li a0, 1                                # print_int ecall
  ecall
  la a0, stringconst5                     # Load address of string const in data section
  mv a1, a0                               # Move A0 to A1 to be argument for print_string ecall
  li a0, 4                                # print_string ecall
  ecall
  addi sp, s0, -12                        # pop all  locals off stack by setting SP to FP (SP at block start)
  lw a0, -12(s0)                          # retrieve func param i
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result of i) onto stack as LHSTemp6 -16
  li a0, 1                                # Load constant 1 to a0
  lw t1, -16(s0)                          # t1 = saved LHS (LHSTemp6)
  add a0, t1, a0                          # a0 = t1 + a0 (i) + 1)
  addi sp, sp, 4                          # pop lhs temporary LHSTemp6 off stack
  sw a0, -12(s0)                          # save RHS to variable on stack
                                          # no locals to pop off stack
  j whiletest1                            # loop back to test
exitwhile2:
  addi sp, s0, -8                         # pop all  locals off stack by setting SP to FP (SP at block start)
                                          # no locals to pop off stack
                                          # main epilogue
  lw ra, -4(s0)                           # load saved RA
  mv t0, s0                               # temp current FP (also = old SP)
  lw s0, -8(s0)                           # restore callers FP
  mv sp, t0                               # restore caller's SP, deleting the callee AR
  jr ra                                   # jump back to caller (RA)
fib:
  addi sp, sp, -8                         # Make space for start of AR
  sw s0, 0(sp)                            # Save caller's FP
  sw ra, 4(sp)                            # Save caller's RA
  addi s0, sp, 8                          # New FP is at old SP
                                          # fib body
                                          # no locals to reserve stack for
  lw a0, 0(s0)                            # retrieve func param n
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result of n) onto stack as LHSTemp9 -12
  li a0, 2                                # Load constant 2 to a0
  lw t1, -12(s0)                          # t1 = saved LHS (LHSTemp9)
  slt a0, t1, a0                          # a0 = t1 < a0 (n < 2)
  addi sp, sp, 4                          # pop lhs temporary LHSTemp9 off stack
  bnez a0, then7                          # if true jump to then
else10:                                   # else label
                                          # call fib(n - 2)
  lw a0, 0(s0)                            # retrieve func param n
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result of n) onto stack as LHSTemp11 -12
  li a0, 2                                # Load constant 2 to a0
  lw t1, -12(s0)                          # t1 = saved LHS (LHSTemp11)
  sub a0, t1, a0                          # a0 = t1 - a0 (n) - 2)
  addi sp, sp, 4                          # pop lhs temporary LHSTemp11 off stack
  addi sp, sp, -4
  sw a0, 0(sp)                            # save function param 0:n to stack
  jal fib
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result of fib(n - 2)) onto stack as LHSTemp13 -16
                                          # call fib(n - 1)
  lw a0, 0(s0)                            # retrieve func param n
  addi sp, sp, -4
  sw a0, 0(sp)                            # push a0 (LHS result of n) onto stack as LHSTemp14 -20
  li a0, 1                                # Load constant 1 to a0
  lw t1, -20(s0)                          # t1 = saved LHS (LHSTemp14)
  sub a0, t1, a0                          # a0 = t1 - a0 (n) - 1)
  addi sp, sp, 4                          # pop lhs temporary LHSTemp14 off stack
  addi sp, sp, -4
  sw a0, 0(sp)                            # save function param 0:n to stack
  jal fib
  lw t1, -16(s0)                          # t1 = saved LHS (LHSTemp13)
  add a0, t1, a0                          # a0 = t1 + a0 (fib(n - 2)) + fib(n - 1))
  addi sp, sp, 4                          # pop lhs temporary LHSTemp13 off stack
  j exitIf8                               # jump to exit if
then7:
  lw a0, 0(s0)                            # retrieve func param n
exitIf8:
  addi sp, s0, -8                         # pop all fib body locals off stack by setting SP to FP (SP at block start)
                                          # fib epilogue
  lw ra, -4(s0)                           # load saved RA
  mv t0, s0                               # temp current FP (also = old SP)
  lw s0, -8(s0)                           # restore callers FP
  mv sp, t0                               # restore caller's SP, deleting the callee AR
  jr ra                                   # jump back to caller (RA)

.data
stringconst5: .asciiz "\n"
