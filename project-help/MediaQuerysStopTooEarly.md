## Question

When I set a media query, it stops applying too early.

## Answer

For whatever reason media querys in code don't match up with the brouser. You need to add extra units to you query as an off set to fix this. The currently known offset is 17px too small.
