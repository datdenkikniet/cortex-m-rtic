1. It seems that `pop()`-ing of the wait queue may be visible before the `push` to the `freeq` on the sending thread.
2. Wrapping `try_recv` in a `critical_section` allows the test to pass.
3. Wrapping the freeq push + wait_queue pop in a single `critical_section` seems to cause the test to run forever (no idea why).